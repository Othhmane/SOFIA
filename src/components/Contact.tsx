import React from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageCircle, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        'service_nj6pq2k',
        'template_s5bx97j',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '8DPeDN7iklHjzy44x'
      )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Faire disparaître le message après 5 secondes
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
        // Faire disparaître le message d'erreur après 5 secondes
        setTimeout(() => setStatus('idle'), 5000);
      });
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
              {/* Message de confirmation */}
              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium">Message envoyé avec succès !</p>
                    <p className="text-green-700 text-sm mt-1">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              )}

              {/* Message d'erreur */}
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3 animate-fade-in">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Erreur lors de l'envoi</p>
                    <p className="text-red-700 text-sm mt-1">Veuillez réessayer ou nous contacter directement.</p>
                  </div>
                </div>
              )}

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
                  disabled={status === 'sending'}
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
                  disabled={status === 'sending'}
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
                  disabled={status === 'sending'}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full group relative overflow-hidden bg-gradient-to-r from-primary-violet to-primary-turquoise text-white px-8 py-4 rounded-xl font-semibold font-poppins shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  t.contact.form.send
                )}
              </button>
            </form>
          </div>

          <div className="space-y-5">
            <a
              href="mailto:mohamed.anis.haddouche@gmail.com"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-turquoise/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary-turquoise" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="text-gray-700 font-medium">mohamed.anis.haddouche@gmail.com</div>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-turquoise/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary-turquoise" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Téléphone</div>
                <div className="text-gray-700 font-medium">+33 07 66 55 20 73</div>
              </div>
            </div>

            <a
              href="https://wa.me/33766552073"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-turquoise/10 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-primary-turquoise" />
              </div>
              <div>
                <div className="text-sm text-gray-500">WhatsApp</div>
                <div className="text-gray-700 font-medium">Discuter maintenant</div>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-turquoise/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary-turquoise" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Localisation</div>
                <div className="text-gray-700 font-medium">Cheraga, Alger, Algérie</div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/mohamed-anis-haddouche/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-turquoise/10 flex items-center justify-center">
                <Linkedin className="h-5 w-5 text-primary-turquoise" />
              </div>
              <div>
                <div className="text-sm text-gray-500">LinkedIn</div>
                <div className="text-gray-700 font-medium">SOFIA</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;