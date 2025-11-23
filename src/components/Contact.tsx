import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'fb8cd7dd-6687-402d-bb3d-da6257e95b36',
          name: formData.name,
          organization: formData.organization,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: '메세지가 성공적으로 전송되었습니다!'
        });
        // Reset form
        setFormData({
          name: '',
          organization: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: '전송에 실패했습니다. 다시 시도해주세요.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: '전송 중 오류가 발생했습니다. 다시 시도해주세요.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="my-8">
      <hr className="border-t border-gray-300 mb-8" />
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <p className="mb-8">Get in touch with Ensoltech for your manufacturing solutions.</p>
      
      {/* Contact Form */}
      <div className="max-w-2xl mx-auto px-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Success/Error Messages */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-md ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
                style={{
                  backgroundColor: submitStatus.type === 'success'
                    ? 'var(--color-success)'
                    : 'var(--color-error)',
                  borderColor: 'var(--border-color)'
                }}
              >
                {submitStatus.message}
              </div>
            )}

            {/* 성함 (Name) */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                성함
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{ borderColor: 'var(--border-color)' }}
                placeholder="이름을 입력해주세요"
              />
            </div>

            {/* 소속 (Organization) */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                소속
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{ borderColor: 'var(--border-color)' }}
                placeholder="회사명을 입력해주세요"
              />
            </div>

            {/* 이메일 (Email) */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{ borderColor: 'var(--border-color)' }}
                placeholder="email@example.com"
              />
            </div>

            {/* 메세지 (Message) */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                메세지
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                style={{ borderColor: 'var(--border-color)' }}
                placeholder="문의사항을 입력해주세요"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 px-6 py-3 font-medium rounded-md transition-colors duration-200 ${
                isSubmitting
                  ? 'cursor-not-allowed'
                  : 'text-white hover:opacity-90'
              }`}
              style={{
                backgroundColor: isSubmitting
                  ? 'var(--color-gray-400)'
                  : 'var(--color-primary-dark)'
              }}
            >
              {isSubmitting ? '전송 중...' : '문의하기'}
            </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
