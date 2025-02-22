import React, { useState, useEffect } from 'react';
import { Card3D } from './3DCard';
import Navbar from './Navbar';
import ContactInfo from './ContactInfo';

// Add this mock data at the top of the file
const MOCK_REVIEWS = [
  {
    _id: '1',
    name: 'John Doe',
    rating: 5,
    comment: 'Excellent work! The website design exceeded my expectations.',
    service: 'Web Design',
    createdAt: '2024-03-15T10:30:00Z'
  },
  {
    _id: '2',
    name: 'Jane Smith',
    rating: 4,
    comment: 'Very professional and responsive. Great attention to detail.',
    service: 'Logo Design',
    createdAt: '2024-03-14T15:20:00Z'
  },
  // Add more mock reviews as needed
];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
    service: 'Web Design'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stats, setStats] = useState({
    averageRating: 0,
    totalReviews: 0,
    ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  });
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    // Calculate statistics when reviews change
    if (reviews.length > 0) {
      const total = reviews.length;
      const avg = reviews.reduce((acc, rev) => acc + rev.rating, 0) / total;
      const distribution = reviews.reduce((acc, rev) => {
        acc[rev.rating] = (acc[rev.rating] || 0) + 1;
        return acc;
      }, {5: 0, 4: 0, 3: 0, 2: 0, 1: 0});

      setStats({
        averageRating: avg.toFixed(1),
        totalReviews: total,
        ratingDistribution: distribution
      });
    }
  }, [reviews]);

  const fetchReviews = async () => {
    try {
      // Use mock data instead of API call
      setReviews(MOCK_REVIEWS);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      if (!newReview.name || !newReview.comment) {
        throw new Error('Please fill in all required fields');
      }

      // Create a new mock review
      const mockNewReview = {
        _id: String(Date.now()),
        ...newReview,
        createdAt: new Date().toISOString()
      };

      // Add to existing reviews
      setReviews(prevReviews => [mockNewReview, ...prevReviews]);

      // Reset form
      setNewReview({
        name: '',
        rating: 5,
        comment: '',
        service: 'Web Design'
      });

      // Show success message
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);

    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white">
      <Navbar />

      <main className="relative pt-32 px-4 md:px-24">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Client Reviews
        </h1>

        {/* Statistics Section */}
        <Card3D className="max-w-4xl mx-auto mb-16 p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">{stats.averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-2xl ${i < Math.round(stats.averageRating) ? 'text-yellow-400' : 'text-gray-600'}`}>★</span>
                ))}
              </div>
              <p className="text-gray-400">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">{stats.totalReviews}</div>
              <p className="text-gray-400">Total Reviews</p>
            </div>
            <div>
              {[5,4,3,2,1].map(rating => (
                <div key={rating} className="flex items-center gap-2 mb-2">
                  <span className="w-8 text-right">{rating}★</span>
                  <div className="flex-1 bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-purple-400 rounded-full h-2"
                      style={{
                        width: `${(stats.ratingDistribution[rating] / stats.totalReviews) * 100}%`
                      }}
                    ></div>
                  </div>
                  <span className="w-8">{stats.ratingDistribution[rating]}</span>
                </div>
              ))}
            </div>
          </div>
        </Card3D>

        {/* Review Form */}
        <Card3D className="max-w-2xl mx-auto mb-16 p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg mb-2">Name</label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                required
                className="w-full p-3 bg-white/5 rounded-lg border border-white/10"
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Service</label>
              <select
                value={newReview.service}
                onChange={(e) => setNewReview({...newReview, service: e.target.value})}
                className="w-full p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <option>Web Design</option>
                <option>Logo Design</option>
                <option>Web Development</option>
              </select>
            </div>

            <div>
              <label className="block text-lg mb-2">Rating</label>
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})}
                className="w-full p-3 bg-white/5 rounded-lg border border-white/10"
              >
                {[5,4,3,2,1].map(num => (
                  <option key={num} value={num}>{num} Stars</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-lg mb-2">Comment</label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                required
                rows="4"
                className="w-full p-3 bg-white/5 rounded-lg border border-white/10"
              ></textarea>
            </div>

            {submitError && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg">
                {submitError}
              </div>
            )}

            {submitSuccess && (
              <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-lg">
                Review submitted successfully!
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full
                font-bold transition-all duration-300 relative
                ${isSubmitting ? 'opacity-70' : 'hover:scale-105'}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : 'Submit Review'}
            </button>
          </form>
        </Card3D>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Reviews List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Recent Reviews</h2>
            {reviews.map((review) => (
              <Card3D 
                key={review._id} 
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm
                  hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{review.name}</h3>
                    <p className="text-purple-400">{review.service}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-400">{review.comment}</p>
                <p className="text-sm text-gray-500 mt-4">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </Card3D>
            ))}
          </div>

          {/* Contact Section */}
          <section className="py-16">
            <Card3D className="max-w-4xl mx-auto p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <ContactInfo />
            </Card3D>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Reviews; 