import Image from 'next/image'

export default function About() {
    return (
        <main className="min-h-screen p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Despre Asociația Focul Viu</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Misiunea Noastră</h2>
                <p className="text-gray-700 mb-4">
                    Suntem dedicați explorării, protejării și documentării peșterilor din România. 
                    Prin activitatea noastră, promovăm speologia ca sport și știință, educăm 
                    publicul despre importanța mediului subteran și contribuim la conservarea 
                    patrimoniului speologic.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Cine Suntem</h2>
                <p className="text-gray-700 mb-4">
                    Asociația Speologică Focul Viu, înființată în 1980, reunește speologi pasionați 
                    de explorarea peșterilor. Cu o tradiție de peste 40 de ani în speologia românească, 
                    am contribuit la descoperirea și cartarea multor peșteri importante din țară.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Valorile Noastre</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Siguranță și responsabilitate în explorare</li>
                    <li>Protejarea mediului subteran</li>
                    <li>Colaborare și spirit de echipă</li>
                    <li>Educație și formare continuă</li>
                    <li>Respect pentru natură și comunitate</li>
                </ul>
            </section>
        </main>
    )
}