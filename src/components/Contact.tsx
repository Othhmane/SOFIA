import React from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_nj6pq2k',      // Ton Service ID
        'template_s5bx97j',     // Ton Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '8DPeDN7iklHjzy44x'     // Ta Clé Publique
      )
      .then(() => {
        alert('Email envoyé avec succès ✅');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Erreur lors de l’envoi ❌');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-violet mb-4 font-poppins">{t.contact.title}</h2>
          <p className="text-xl text-gray-600 font-roboto">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-1 font-poppins">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-1 font-poppins">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-1 font-poppins">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full gradient-hover text-white px-6 py-3 rounded-lg transition-all duration-300 font-poppins"
              >
                {t.contact.form.send}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-primary-dark mb-4 font-poppins">
                {t.contact.info.title}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary-turquoise mr-3" />
                  <span className="text-gray-600">contact@dataai.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary-turquoise mr-3" />
                  <span className="text-gray-600">+33 07 66 55 20 73</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-primary-turquoise mr-3" />
                  <a
                    href="https://wa.me/33766552073"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-violet transition"
                  >
                    WhatsApp – Discuter
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary-turquoise mr-3" />
                  <span className="text-gray-600">Cheraga, Alger, Algérie</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-primary-turquoise mr-3" />
                  <a
                    href="https://www.linkedin.com/company/TON-LINK-ICI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-violet transition"
                  >
                    LinkedIn – SOFIA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;