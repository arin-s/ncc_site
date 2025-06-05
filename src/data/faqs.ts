export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "What types of construction projects do you handle?",
                answer: "We specialize in a wide range of construction projects, including [mention 2-3 broad examples like: new commercial builds, residential renovations, and light industrial projects]. The best way to know if we're a fit is to contact us with your specific project details."
            },
            {
                question: "How long has your company been in business?",
                answer: "[Your Company Name] has been proudly serving the [Your Region/City] area for over [Number] years, bringing a wealth of experience and a proven track record to every job."
            },
            {
                question: "How do I get a quote for my project?",
                answer: "Getting started is easy! You can call us at [Your Phone Number], email us at [Your Email Address], or fill out the contact form on our website. We'll then schedule an initial consultation to discuss your needs, scope, and provide a detailed estimate."
            },
            {
                question: "What geographical areas do you serve?",
                answer: "We primarily operate in [Your City/Main County] and the surrounding [mention general area, e.g., tri-county area, or specific neighboring towns/counties]. If you're unsure if your project falls within our service range, please don't hesitate to reach out."
            },
            {
                question: "Are you licensed and insured?",
                answer: "Absolutely. We are fully licensed [mention your state license # if common practice and desired] and comprehensively insured for all construction work we undertake. We prioritize safety and professionalism, providing peace of mind for our clients."
            },
        ]
    }
};
