import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const INPUT_CLASSES =
    'w-full px-4 py-3 text-base border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400';

interface FormData {
    name: string;
    organization: string;
    email: string;
    message: string;
}

const COPY = {
    en: {
        eyebrow: 'Get in touch',
        title: 'Contact us',
        intro: 'Tell us about your line. We respond within one business day.',
        name: 'Name',
        organization: 'Organization',
        email: 'Email',
        message: 'Message',
        namePh: 'Your name',
        orgPh: 'Company name',
        emailPh: 'email@example.com',
        messagePh: 'How can we help?',
        submit: 'Send message',
        sending: 'Sending…',
        success: 'Message sent successfully.',
        error: 'Something went wrong. Please try again.',
    },
    ko: {
        eyebrow: '문의하기',
        title: 'Contact Us',
        intro: '엔솔테크 제조 솔루션에 대해 문의해 주세요.',
        name: '성함',
        organization: '소속',
        email: '이메일',
        message: '메세지',
        namePh: '이름을 입력해주세요',
        orgPh: '회사명을 입력해주세요',
        emailPh: 'email@example.com',
        messagePh: '문의사항을 입력해주세요',
        submit: '문의하기',
        sending: '전송 중...',
        success: '메세지가 성공적으로 전송되었습니다!',
        error: '전송에 실패했습니다. 다시 시도해주세요.',
    },
} as const;

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const t = COPY[language];

    const [formData, setFormData] = useState<FormData>({ name: '', organization: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string;
            if (!accessKey) throw new Error('Web3Forms access key is not configured');

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    organization: formData.organization,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Contact Form Submission from ${formData.name}`,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSubmitStatus({ type: 'success', message: t.success });
                setFormData({ name: '', organization: '', email: '', message: '' });
            } else {
                setSubmitStatus({ type: 'error', message: t.error });
            }
        } catch {
            setSubmitStatus({ type: 'error', message: t.error });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="mt-16 sm:mt-20 lg:mt-24" aria-labelledby="contact-heading">
            <hr className="border-t border-gray-200 mb-10 sm:mb-12" />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
                <div>
                    <span className="eyebrow-num block text-[11px] uppercase text-gray-400 mb-2">{t.eyebrow}</span>
                    <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                        {t.title}
                    </h2>
                    <p className="mt-3 text-gray-600 leading-relaxed">{t.intro}</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {submitStatus.type && (
                        <div
                            role="status"
                            className={`p-4 rounded-lg text-sm ${
                                submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                            }`}
                        >
                            {submitStatus.message}
                        </div>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">{t.name}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                autoComplete="name"
                                className={INPUT_CLASSES}
                                style={{ borderColor: 'var(--border-color)' }}
                                placeholder={t.namePh}
                            />
                        </div>
                        <div>
                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">{t.organization}</label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                autoComplete="organization"
                                className={INPUT_CLASSES}
                                style={{ borderColor: 'var(--border-color)' }}
                                placeholder={t.orgPh}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">{t.email}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            inputMode="email"
                            className={INPUT_CLASSES}
                            style={{ borderColor: 'var(--border-color)' }}
                            placeholder={t.emailPh}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">{t.message}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={`${INPUT_CLASSES} resize-y min-h-[140px]`}
                            style={{ borderColor: 'var(--border-color)' }}
                            placeholder={t.messagePh}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`mt-2 w-full sm:w-auto sm:self-start px-6 py-3.5 text-base font-medium rounded-lg transition-all duration-200 ${
                            isSubmitting ? 'cursor-not-allowed opacity-60' : 'text-white hover:opacity-90 active:scale-[0.99]'
                        }`}
                        style={{
                            backgroundColor: isSubmitting ? 'var(--color-gray-400)' : 'var(--color-primary-dark)',
                        }}
                    >
                        {isSubmitting ? t.sending : t.submit}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
