'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { FeedbackFormData, RatingOption, WaitingTimeOption } from '@/types/feedback';

export default function GhatkoparFeedbackPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [formData, setFormData] = useState({
    dateOfVisit: '',
    caseNumber: '',
    name: '',
    contact: '',
    doctorClearExplanation: '' as RatingOption | '',
    properAttention: '' as RatingOption | '',
    waitingTime: '' as WaitingTimeOption | '',
    clinicClean: '' as RatingOption | '',
    clearInstructions: '' as RatingOption | '',
    improvements: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const payload: Omit<FeedbackFormData, 'submittedAt'> = {
        clinic: 'Ghatkopar',
        ...formData,
      } as Omit<FeedbackFormData, 'submittedAt'>;

      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage({ type: 'success', text: data.message });
        // Reset form
        setFormData({
          dateOfVisit: '',
          caseNumber: '',
          name: '',
          contact: '',
          doctorClearExplanation: '',
          properAttention: '',
          waitingTime: '',
          clinicClean: '',
          clearInstructions: '',
          improvements: '',
        });
      } else {
        setSubmitMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Failed to submit feedback. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            🐾 ALWAYS CARE ANIMAL CLINIC
          </h1>
          <h2 className="text-xl font-semibold text-center text-blue-600 mb-2">
            Ghatkopar Branch
          </h2>
          <p className="text-center text-gray-600 mb-4">
            💖 Your feedback helps us care better for the voiceless.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-yellow-800 font-semibold">
              🎁 Every month, 3 feedback entries win a Free Blood Test or Vaccination for a stray!
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          {/* Basic Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">📋 Basic Information</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">📅 Date of Visit *</label>
                <input
                  type="date"
                  required
                  value={formData.dateOfVisit}
                  onChange={(e) => setFormData({ ...formData, dateOfVisit: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">🐶 Case Number *</label>
                <input
                  type="text"
                  required
                  value={formData.caseNumber}
                  onChange={(e) => setFormData({ ...formData, caseNumber: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., GK-2024-001"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">👤 Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Full Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">📞 Contact Number *</label>
              <input
                type="tel"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Phone or Email"
              />
            </div>
          </div>

          <hr className="my-6" />

          {/* Feedback Questions */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">💬 Feedback Questions</h3>

            {/* Question 1 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <label className="block text-gray-800 font-medium mb-3">
                🩺 Was the doctor/staff clear in explaining the problem and treatment? *
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                {(['yes', 'somewhat', 'no'] as const).map((option) => (
                  <label key={option} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      required
                      name="doctorClearExplanation"
                      value={option}
                      checked={formData.doctorClearExplanation === option}
                      onChange={(e) => setFormData({ ...formData, doctorClearExplanation: e.target.value as RatingOption })}
                      className="mr-2"
                    />
                    <span className="capitalize">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <label className="block text-gray-800 font-medium mb-3">
                🐾 Did you feel your animal received proper attention and care? *
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                {(['yes', 'somewhat', 'no'] as const).map((option) => (
                  <label key={option} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      required
                      name="properAttention"
                      value={option}
                      checked={formData.properAttention === option}
                      onChange={(e) => setFormData({ ...formData, properAttention: e.target.value as RatingOption })}
                      className="mr-2"
                    />
                    <span className="capitalize">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <label className="block text-gray-800 font-medium mb-3">
                🕓 Was the waiting time reasonable? *
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                {(['yes', 'could-be-shorter', 'too-long'] as const).map((option) => (
                  <label key={option} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      required
                      name="waitingTime"
                      value={option}
                      checked={formData.waitingTime === option}
                      onChange={(e) => setFormData({ ...formData, waitingTime: e.target.value as WaitingTimeOption })}
                      className="mr-2"
                    />
                    <span className="capitalize">{option === 'could-be-shorter' ? 'Could be shorter' : option === 'too-long' ? 'Too long' : option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 4 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <label className="block text-gray-800 font-medium mb-3">
                🧹 Was the clinic clean and comfortable? *
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                {(['yes', 'somewhat', 'no'] as const).map((option) => (
                  <label key={option} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      required
                      name="clinicClean"
                      value={option}
                      checked={formData.clinicClean === option}
                      onChange={(e) => setFormData({ ...formData, clinicClean: e.target.value as RatingOption })}
                      className="mr-2"
                    />
                    <span className="capitalize">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 5 */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <label className="block text-gray-800 font-medium mb-3">
                💊 Did you get clear instructions for follow-up or home care? *
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                {(['yes', 'somewhat', 'no'] as const).map((option) => (
                  <label key={option} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      required
                      name="clearInstructions"
                      value={option}
                      checked={formData.clearInstructions === option}
                      onChange={(e) => setFormData({ ...formData, clearInstructions: e.target.value as RatingOption })}
                      className="mr-2"
                    />
                    <span className="capitalize">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 6 - Improvements */}
            <div className="mb-6">
              <label className="block text-gray-800 font-medium mb-3">
                💭 What improvements would you like to see?
              </label>
              <textarea
                value={formData.improvements}
                onChange={(e) => setFormData({ ...formData, improvements: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your suggestions help us improve..."
              />
            </div>
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div className={`mb-4 p-4 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {submitMessage.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : '✨ Submit Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
}
