import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary-turquoise mr-3" />
                  <span className="text-gray-600">123 AI Street, Data City, DC 12345</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary-dark mb-4 font-poppins">
                {t.contact.info.hours}
              </h3>
              <p className="text-gray-600 font-roboto">
                {t.contact.info.weekdays}<br />
                {t.contact.info.saturday}<br />
                {t.contact.info.sunday}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;