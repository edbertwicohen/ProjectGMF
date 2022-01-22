import React from "react";
import { Button, View, Text, HStack, VStack, ScrollView } from "native-base";
import { Image } from "react-native";

const NewsList = [
    {
        image: require('../assets/news1.png'),
        title: 'GMF dan Citilink Selesaikan Rekomendasi Ditjen Hubud',
        description: `Tangerang, 30 Desember 2021: PT Garuda Maintenance Facility Aero Asia Tbk ("GMF") and PT Citilink Indonesia ("Citilink") ensure that all recommendations from the Directorate General of Civil Aviation ("DGCA") c.q. the Directorate of Airworthiness and Aircraft Operations ("DKPPU") delivered in a letter released on December 22 has been completed. The recommendations can be resolved through synergy and intensive coordination from the parties involved.

        GMF CEO Andi Fahrurrozi said that GMF has implemented a number of corrective measures after conducting an investigation and identification of contributing factors to the hold item list (HIL) status on the brake of 19 Citilink aircraft operated between December 1 to 17. These improvement measures include brake replacement, HIL evaluation, increased supervision, and improvements in the management of components and spare parts. "From a total of 19 aircraft, GMF has carried out brake replacements for 18 Citilink aircraft in operation. GMF ensures that brake replacements for one Citilink aircraft that are currently undergoing c-check at the GMF hangar will be carried out before the aircraft returns to service."

        Corrective measures have also been implemented to ensure the readiness of the needs of components and spare parts during the pandemic. This is realized through improvements in planning aspects, as well as renegotiation with suppliers to support the provision and delivery of spare parts. Furthermore, GMF also formed a task force to monitor and complete HIL in accordance with applicable procedures. All audit findings contained in the letter have also been completed.

        President Director of Citilink Juliandra stated that Citilink continues to coordinate intensively with GMF to ensure that all recommendations from DGCA have been followed up properly. "We are committed to always prioritizing safety in aviation, including complying with aviation safety standards set by regulators and aircraft manufacturers," Juliandra said. Juliandra also ensures that their operating aircraft are safe and airworthy in accordance with applicable regulations so that passengers can travel safely and comfortably when flying with Citilink. "This follow-up response proves the shared commitment of all elements involved to synergize in maintaining airworthiness and passenger safety, especially in welcoming the new year and gradually recovering aviation industry," concluded Andi.
        `
    },
    {
        image: require('../assets/news2.png'),
        title: 'GMF Catatkan Perbaikan Kinerja Pada Akhir Kuartal Tiga',
        description:`
        Tangerang, 23 Desember 2021: PT Garuda Maintenance Facility Aero Asia Tbk (“GMF”, “kode emiten: GMFI”) berhasil mencatatkan perbaikan signifikan pada aspek profitabilitas pada kuartal ketiga tahun 2021 di tengah dinamika industri aviasi yang masih menantang dikarenakan adanya pemberlakuan pembatasan kegiatan masyarakat (PPKM) di sejumlah daerah. Perbaikan signifikan ini tampak pada rugi usaha YTD September yang dapat ditekan hingga 75,7% secara year on year (YoY). Meski masih negatif, perolehan earning before interest, tax, depreciation and amortization (EBITDA) juga menunjukkan perbaikan sebesar 94,9% pada akhir kuartal ketiga tahun 2021 dibandingkan periode yang sama di tahun sebelumnya. Hal ini dikontribusikan oleh berkurangnya beban usaha, manajemen arus kas, inisiatif-inisiatif efisiensi, dan restrukturisasi fasilitas pendanaan yang dilakukan Perseroan. Adapun, pendapatan usaha GMFI sepanjang Januari hingga September 2021 tercatat sebesar MUSD 165,4.

        Pada kuartal ketiga 2021, kinerja bisnis inti GMFI secara keseluruhan masih tertekan. Meski demikian, segmen airframe maintenance mengalami peningkatan permintaan pekerjaan, khususnya pada segmen proyek-proyek terkait end-of-lease. Pada segmen perawatan pesawat kargo, GMFI juga mencatatkan penambahan tiga pelanggan baru yang merupakan maskapai kargo, baik di dalam maupun di luar negeri. Direktur Utama GMF Andi Fahrurrozi mengatakan bahwa selain berfokus pada pemulihan finansial secara berkelanjutan, pihaknya juga tengah mengoptimalkan peluang dari segmen-segmen potensial yang cenderung stabil atau tumbuh di tengah pandemi. “Penjajakan potensi kerjasama dengan partner dan pengembangan kapabilitas juga kami lakukan sebagai upaya diversifikasi bisnis dan antisipasi dalam menghadapi momentum bangkitnya industri aviasi,” tutur Andi. Upaya tersebut tampak dari ditandatanganinya sejumlah nota kesepahaman pada periode Juli hingga September 2021, diantaranya oleh PT Bali Widya Dirgantara (BIFA) di bidang perawatan pesawat, PT Sulzer Indonesia (Sulzer) di bidang pemeliharaan turbin industrial dan aeroderivatif, serta PT Angkasa Pura I (Persero) (AP I) di bidang pengelolaan lahan. Lebih lanjut lagi, GMF juga berhasil mengembangkan kapabilitas perawatan line maintenance untuk perawatan pesawat Boeing 787 milik maskapai asal Jepang, dari semula bersifat assist menjadi full release.

        Industri pertahanan merupakan segmen yang saat ini tengah dikembangkan oleh GMF sebagai upaya diversifikasi bisnis Perseroan. “Pengembangan kapabilitas di segmen military sejalan dengan rencana strategis GMF untuk mengembangkan pusat pemeliharaan dan perawatan pesawat udara milik industri pertahanan, serta berperan serta dalam menjaga kelayakan alutsista Republik Indonesia. Terlebih, GMF juga telah mengantongi sertifikat dari Indonesia Defence Airworthiness Authority sejak awal tahun 2021 ini,” terang Andi. Saat ini, GMF tengah memastikan kesiapan manpower, tools dan equipment untuk project modernisasi dan penggantian center wing box untuk pesawat C130H milik TNI AU pada akhir tahun 2021 ini. Ke depannya, GMFI juga berencana untuk mengkaji pengembangan kapabilitas pemeliharaan mesin pesawat tipe T56, serta perawatan pesawat C-212 dan helikopter guna menangkap potensi di segmen militer.
        `
    },
    {
        image: require('../assets/news3.png'),
        title: 'Rancang Dock Pintar, GMF Raih Penghargaan Inovasi',
        description:`
        Tangerang, 21 Desember 2021: PT Garuda Maintenance Facility Aero Asia Tbk (“GMF”, “kode emiten: GMFI”) meraih penghargaan Adhikara Rekayasa Kategori “Engineering, Procurement, & Construction” dalam ajang “Persatuan Insinyur Indonesia Award 2021” (PII Award 2021) pada hari Jumat (17/12). Penghargaan Adhikara Rekayasa tersebut dianugerahkan oleh Persatuan Insinyur Indonesia (PII) kepada institusi-institusi yang menggunakan profesi keinsinyuran untuk menghasilkan karya yang spektakuler, monumental, serta bermanfaat luas bagi kesejahteraan bangsa dan negara. Project Leader SmartDock GMF Nanang Yulian menerima penghargaan yang diserahkan langsung oleh Menteri Koordinator Bidang Perekonomian Airlangga Hartarto di Bali Nusa Dua Convention Center.

        Dalam ajang tersebut, GMF memperoleh penghargaan Adhikara Rekayasa atas inovasinya dalam membuat SmartDock untuk menunjang pengerjaan project modernisasi dan penggantian center wing box (CWB) pesawat militer jenis Lockheed Martin C130H atau biasa disebut Hercules milik TNI Angkatan Udara Republik Indonesia. Project tersebut direncanakan akan dimulai pada akhir tahun 2021. “Dock atau tangga perawatan pesawat memiliki ukuran dan bentuk yang berbeda-beda sesuai dengan tipe pesawat yang dirawat. Untuk membangun kesiapan GMF dalam pengerjaan pesawat C130H, GMF berinisiatif untuk membuat equipment berupa SmartDock yang dirancang khusus untuk tipe pesawat tersebut dengan dilengkapi oleh fitur-fitur canggih yang mendukung otomasi dengan tetap mengedepankan aspek safety,” jelas Nanang.

        Fitur-fitur tersebut antara lain adalah live-monitoring dengan akses CCTV untuk memantau pekerjaan perawatan pesawat melalui smartphone, pengenalan wajah yang dilengkapi dengan pintu otomatis untuk meningkatkan aspek keamanan dan membatasi akses bagi personil yang tidak berkepentingan, alat ukur menggunakan laser, titik sumber pneumatik dan kelistrikan untuk menunjang aktivitas pemeliharaan, serta alarm darurat hingga perangkat darurat. Sejalan dengan upaya Perseroan dalam menjaga aspek safety serta keselamatan dan kesehatan kerja (K3), SmartDock juga dilengkapi oleh movement proximity sensor yang didukung oleh live camera, warning indicator, dan pneumatic brake untuk mencegah terjadinya insiden ketika dipindahkan. Untuk memudahkan proses pemindahan dan penyimpanan, SmartDock didesain dengan sistem bongkar pasang yang sederhana dan material yang ringan, namun tetap memenuhi standard keamanan. “Dalam proses pembuatannya, GMF senantiasa berkoordinasi dengan produsen pesawat Lockheed Martin. Setelah melalui proses audit kesiapan equipment penunjang perawatan pesawat, SmartDock dinyatakan layak dan memenuhi persyaratan,” tutur Nanang.

        Tidak hanya mempermudah proses pemeliharaan pesawat, dock pintar ini juga mempermudah proses pemantauan pekerjaan yang dapat dilakukan di mana saja melalui fitur live monitoring. SmartDock juga dilansir dapat turut mendukung peningkatan produktivitas kerja lewat pemantauan kinerja personil yang bertugas, serta mendorong terjadinya efisiensi biaya karena dock dapat diproduksi sendiri oleh GMF. “SmartDock menjadi bukti bahwa pandemi bukan merupakan halangan untuk berkarya. Harapannya, penghargaan ini dapat menjadi motivasi bagi GMF untuk terus berinovasi, baik yang berkaitan langsung dengan pemeliharaan pesawat maupun equipment penunjang lainnya,” tutup Nanang.`
    },
    {
        image: require('../assets/news4.png'),
        title: 'GMF dan AP I Teken Nota Kesepahaman',
        description:`
        Jakarta, 27 Oktober 2021: PT Garuda Maintenance Facility Aero Asia Tbk (GMF) menandatangani nota kesepahaman dengan PT Angkasa Pura I (Persero) (AP I). Bertempat di Kantor Angkasa Pura I, nota kesepahaman ini ditandatangani oleh Direktur Utama GMF Andi Fahrurrozi dan Direktur Utama AP I Faik Fahmi pada 26 Oktober lalu. Nota kesepahaman ini menjadi landasan awal bagi GMF dan AP I untuk melakukan penjajakan kerja sama pengelolaan lahan milik AP I di Bandar Udara Internasional Sultan Hasanuddin Makassar untuk pengembangan dan operasional hanggar ke depannya.

        Faik Fahmi dalam sambutannya mengatakan bahwa posisi Makassar tergolong strategis untuk menggarap pasar di kawasan Indonesia bagian tengah dan timur. “Transportasi udara di kawasan Indonesia tengah dan timur menjadi salah satu tumpuan dalam mendorong pergerakkan penumpang maupun kargo karena menawarkan akses yang lebih mudah dan cepat dibandingkan moda transportasi lainnya. Hal ini menjadikan Makassar sebagai pasar yang potensial untuk menjangkau kawasan Indonesia tengah dan timur,” ungkap Faik.  Untuk menangkap potensi ini, kolaborasi antara kedua pihak dalam mengelola lahan tersebut dijalin guna menarik investor dalam pembangunan hanggar beserta fasilitas pendukungnya, sehingga menciptakan multiplier effect seperti pembukaan lapangan kerja, akselerasi ekonomi, serta nilai tambah bagi pemangku kepentingan.

        Kolaborasi ini  juga sejalan dengan rencana bisnis GMF dalam menangkap peluang perawatan pesawat saat momentum industri aviasi bangkit kembali. Andi mengakui bahwa pandemi yang saat ini memukul sektor aviasi mendorong GMF untuk memastikan strategi pemulihan kinerja dapat terimplementasi secara maksimal. “Strategi recovery memang masih menjadi fokus kami saat ini. Namun demikian, kami optimis bahwa industri aviasi dapat segera pulih dalam beberapa tahun ke depan. Kolaborasi ini menjadi kesempatan bagi kami untuk mempersiapkan diri dalam menangkap peluang dan mengantisipasi momentum tersebut,” tutur Andi.

        Dengan mengoperasikan hanggar di Makassar yang memiliki kedekatan lokasi dengan customer di wilayah Indonesia bagian tengah dan timur, kemudahan akses yang ditawarkan ini diharapkan dapat membantu menekan biaya operasional operator penerbangan dan memperkuat industri aviasi di kawasan domestik.
        `
    }
]

const News = ({ navigation }) => {
    
    return(
        <ScrollView>
            <View style={{alignItems: 'center'}}>
                <Button marginTop={10} h='200' w='330' backgroundColor='transparent' onPress={() => navigation.navigate('NewsDetail', { detail: NewsList[0] })}>
                    <View style={{ width: 330, height: 200 }} >
                        <Image source={require('../assets/news1.png')} style={{ width: 330, height: 130 }} />
                        <Text style={{ color: 'black' }} marginLeft={2} marginTop={2} fontSize={12} fontWeight='semibold'>GMF dan Citilink Selesaikan Rekomendasi Ditjen Hubud</Text>
                        <Text style={{ color: 'grey' }} marginLeft={2} marginTop={1} fontSize={10} fontWeight='normal'>31 Desember 2021</Text>
                    </View>
                </Button>
                <Button marginTop={5} h='100' w='350' backgroundColor='transparent' onPress={() => navigation.navigate('NewsDetail', { detail: NewsList[1] })}>
                    <View style={{ width: 330, height: 80 }}>
                        <HStack style={{flex: 1}}>
                            <Image source={require('../assets/news2.png')} style={{ width: 80, height: 80 }} />
                            <VStack style={{flex: 1}}>
                                <Text style={{ color: 'black' }} marginLeft={2} marginTop={2} fontSize={12} fontWeight='semibold'>GMF Catatkan Perbaikan Kinerja Pada Akhir Kuartal Tiga</Text>
                                <Text style={{ color: 'grey' }} marginLeft={2} marginTop={2} fontSize={10} fontWeight='normal'>24 Desember 2021</Text>
                            </VStack>
                        </HStack>
                    </View>
                </Button>
                <Button marginTop={5} h='100' w='350' backgroundColor='transparent' onPress={() => navigation.navigate('NewsDetail', { detail: NewsList[2] })} style={{ justifyContent: 'flex-start' }}>
                    <View style={{ width: 330, height: 80 }}>
                        <HStack style={{flex: 1}}>
                            <Image source={require('../assets/news3.png')} style={{ width: 80, height: 80 }} />
                            <VStack style={{flex: 1}}>
                                <Text style={{ color: 'black' }} marginLeft={2} marginTop={2} fontSize={12} fontWeight='semibold'>Rancang Dock Pintar, GMF Raih Penghargaan Inovasi</Text>
                                <Text style={{ color: 'grey' }} marginLeft={2} marginTop={2} fontSize={10} fontWeight='normal'>21 Desember 2021</Text>
                            </VStack>
                        </HStack>
                    </View>
                </Button>
                <Button marginTop={5} h='100' w='350' backgroundColor='transparent' onPress={() => navigation.navigate('NewsDetail', { detail: NewsList[3] })} style={{ justifyContent: 'flex-start' }}>
                    <View style={{ width: 330, height: 80 }}>
                        <HStack style={{flex: 1}}>
                            <Image source={require('../assets/news4.png')} style={{ width: 80, height: 80 }} />
                            <VStack style={{flex: 1}}>
                                <Text style={{ color: 'black' }} marginLeft={2} marginTop={2} fontSize={12} fontWeight='semibold'>GMF dan AP I Teken Nota Kesepahaman</Text>
                                <Text style={{ color: 'grey' }} marginLeft={2} marginTop={2} fontSize={10} fontWeight='normal'>27 Oktober 2021</Text>
                            </VStack>
                        </HStack>
                    </View>
                </Button>
            </View>
        </ScrollView>
    )
}

export default News;