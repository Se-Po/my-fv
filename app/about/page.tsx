import Image from 'next/image'

export default function About() {
    return (
        <main className="min-h-screen p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-red-100">Despre Asociația Focul Viu</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-red-200">Misiunea Noastră</h2>
                <p className="text-slate-300 mb-4">
                    Suntem dedicați explorării, protejării și documentării peșterilor din România. 
                    Prin activitatea noastră, promovăm speologia ca sport și știință, educăm 
                    publicul despre importanța mediului subteran și contribuim la conservarea 
                    patrimoniului speologic. Ne angajăm să descoperim și să documentăm noi peșteri, 
                    să realizăm studii științifice și să formăm noi generații de speologi pasionați. 
                    Prin conferințe, publicații și activități educative, împărtășim cunoștințele noastre 
                    și promovăm protejarea activă a mediului carstic.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-red-200">Cine Suntem</h2>
                <div className="space-y-4 text-slate-300">
                    <p>
                        Apărut din pasiune pentru speologie și reunind studenți geologi, geografi și fizicieni, 
                        Cercul Focul Viu a avut încă din primii ani importante explorări, a publicat articole 
                        științifice și fotografii, remarcându-se atât ca un foarte activ cerc științific studențesc, 
                        cât și ca unul dintre cele mai importante cluburi de speologi exploratori din țară.
                    </p>
                    
                    <p>
                        Purtând numele unui celebru aven din Munții Apuseni, în care razele soarelui fac să se 
                        "aprindă și să strălucească aidoma unei flăcări" câteva coloane translucide din gheață, 
                        Cercul Focul Viu a reunit între membrii săi sute de tineri și vârstnici "înflăcărați de 
                        pasiunea speologiei". De numele său se leagă peste 1600 de peșteri descoperite, explorări 
                        și cercetări speologice în majoritatea zonelor carstice din țară, publicații științifice, 
                        conferințe și proiecții.
                    </p>

                    <p>
                        Încă de la înființare, Focul Viu a beneficiat de sprijinul și îndrumarea unor prestigioși 
                        oameni de știință, precum Prof. Dr. Valer Trufaș, Prof. Dr. Marcian Bleahu, Prof. Dr. Ioan 
                        Povară, Dr. Gabriel Diaconu, Conf. Dr. Doru Bădescu și Prof. Dr. Cristian Panaiotu.
                    </p>

                    <p>
                        În data de 15 februarie 1990, cercul obține personalitatea juridică, devenind Asociația 
                        Speologică Focul Viu București. După 50 de ani de activitate, principalul nostru bilanț 
                        este dat de pasiunea, setea de cunoaștere, prietenia și colegialitatea a sute de speologi 
                        și zeci de familii care au reușit să mențină și să ducă mai departe spiritul Focului Viu.
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-red-200">Valorile Noastre</h2>
                <ul className="list-disc list-inside text-slate-300">
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