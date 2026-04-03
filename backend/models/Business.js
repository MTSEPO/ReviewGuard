const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  description: String,
  industry: String, // e.g., 'dentist', 'plumber', 'restaurant'
  address: String,
  city: String,
  state: String,
  zipCode: String,
  phone: String,
  website: String,
  logo: String,
  
  // Tone of Voice Settings
  toneOfVoice: {
    type: String,
    enum: ['professional', 'friendly', 'humorous', 'casual', 'formal'],
    default: 'professional',
  },
  
  // Promotions
  currentPromotions: [{
    title: String,
    description: String,
    code: String,
    expiryDate: Date,
  }],
  
  // API Credentials
  googleBusinessProfileId: String,
  yelpBusinessId: String,
  
  // Subscription Info
  subscriptionTier: {
    type: String,
    enum: ['free', 'basic', 'pro'],
    default: 'free',
  },
  subscriptionStatus: {
    type: String,
    enum: ['active', 'expired', 'cancelled'],
    default: 'active',
  },
  trialEndDate: Date,
  subscriptionEndDate: Date,
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Business', businessSchema);