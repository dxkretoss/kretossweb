import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Badge from '../ui/Badge';

const faqs = [
    {
        question: "Can you take over and work on an existing project?",
        answer: "Yes! Our developers are highly experienced in jumping into existing codebases. We'll start by auditing your current project, understanding its architecture, and seamlessly taking over development, bug fixing, or feature additions."
    },
    {
        question: "Do you provide support and maintenance after the app or website is launched?",
        answer: "Absolutely. We don't just build and leave. We offer comprehensive post-launch support and maintenance services to ensure your application remains secure, up-to-date, and fully operational as your business scales."
    },
    {
        question: "How fast can a developer join my team and start working?",
        answer: "Once we understand your requirements and finalize the engagement model, our developers can typically integrate into your team and start working on your project within 24 to 48 hours."
    },
    {
        question: "Will the developer work in my timezone?",
        answer: "Yes, our developers are flexible and can overlap their working hours with your timezone (US, UK, EU, Australia, etc.) to ensure seamless communication and daily standups."
    },
    {
        question: "Can I hire a developer on a flexible, part-time, or hourly basis?",
        answer: "Yes! We offer flexible hiring models. You can hire developers on a dedicated monthly basis for full-time involvement, or choose an hourly/part-time model if you only need them for ongoing maintenance or specific tasks."
    },
    {
        question: "Will my project and idea remain strictly confidential?",
        answer: "100%. We take security very seriously. We sign strict Non-Disclosure Agreements (NDAs) before any discussions begin, ensuring your ideas, code, and intellectual property remain entirely yours."
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-10 lg:py-20 bg-[#f9fbff] font-sans">
            <div className="mx-auto px-6 max-w-[850px]">

                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >

                    <div className="flex items-center justify-center mb-4">
                        <Badge variant='blue'>FAQ</Badge>
                    </div>
                    <h2 className="text-[24px] md:text-[36px] font-semibold text-[#0f172a] mb-5 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                {/* FAQ List */}
                {/* FAQ List */}
                <motion.div
                    className="flex flex-col gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                className={`bg-white border border-[#e2e8f0] rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md border-blue-100' : 'hover:border-blue-200 hover:shadow-sm'}`}
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            >
                                <button
                                    type="button"
                                    className="w-full text-left p-[22px_28px] flex justify-between items-center bg-transparent cursor-pointer transition-colors focus:outline-none"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span className={`font-bold text-[15.5px] pr-4 transition-colors ${isOpen ? 'text-[#0f172a]' : 'text-[#334155]'}`}>
                                        {faq.question}
                                    </span>

                                    {/* Icon */}
                                    <div className={`shrink-0 w-[28px] h-[28px] rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#2563eb]' : 'bg-[#f1f5f9]'}`}>
                                        {isOpen ? (
                                            <ChevronUp className="w-4 h-4 text-white" strokeWidth={3} />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 text-[#94a3b8]" strokeWidth={3} />
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <p className="m-0 px-[28px] pb-[28px] pt-0 text-[15px] leading-[1.7] text-[#64748b]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};

export default Faq;
