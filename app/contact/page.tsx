import { FaFacebook, FaInstagram, FaYoutube, FaVimeo } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker, HiCurrencyDollar } from 'react-icons/hi';

export default function Contact() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <section className="space-y-4">
          <div className="flex items-start gap-2">
            <HiLocationMarker className="mt-1 text-xl text-gray-600" />
            <div>
              <h2 className="font-semibold text-lg">Adresă:</h2>
              <p className="text-gray-700">
                București, Sector 1<br />
                Str. Frumoasă, Nr. 31<br />
                Cod poștal: 010986
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <HiCurrencyDollar className="mt-1 text-xl text-gray-600" />
            <div>
              <h2 className="font-semibold text-lg">Detalii Bancare:</h2>
              <p className="text-gray-700">
                IBAN: RO87RNCB0082044181560001 [RON]<br />
                SWIFT code: RNCBROBU<br />
                Banca Comercială Română<br />
                CUI: 6039603
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <HiPhone className="mt-1 text-xl text-gray-600" />
            <div>
              <h2 className="font-semibold text-lg">Contact:</h2>
              <p className="text-gray-700">
                Președinte: Ștefan Ungureanu<br />
                Tel: 0720.528.587<br />
                <span className="flex items-center gap-2">
                  <HiMail className="text-gray-600" />
                  Email: speofv@yahoo.com
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-semibold text-lg">Social Media:</h2>
          <div className="space-y-3">
            <a href="https://www.facebook.com/asfoculviu/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
              <FaFacebook className="text-2xl" /> Facebook
            </a>
            <a href="https://www.instagram.com/speofv/" className="flex items-center gap-2 text-gray-700 hover:text-pink-600">
              <FaInstagram className="text-2xl" /> Instagram
            </a>
            <a href="https://www.youtube.com/@speofv" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <FaYoutube className="text-2xl" /> Youtube
            </a>
            <a href="https://vimeo.com/user5756210" className="flex items-center gap-2 text-gray-700 hover:text-blue-700">
              <FaVimeo className="text-2xl" /> Vimeo
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}