const AboutApi = () => {
  return (
    <section className="max-w-5xl bg-white p-6">
      <div className="mb-4 flex flex-col items-start">
        <img
          src="/logo.png"
          alt="Nusantara Kita Logo"
          className="mb-4 size-28"
        />
        <h2 className="mb-3 text-3xl font-bold text-gray-800">
          Nusantara Kita
        </h2>
        <p className="text-base leading-relaxed text-gray-600">
          Nusantara Kita adalah sebuah API yang menyediakan data wilayah
          Indonesia. Proyek ini dirancang untuk memudahkan akses dan penggunaan
          data geospasial terkait wilayah-wilayah di Indonesia. API ini dapat
          digunakan untuk berbagai aplikasi yang memerlukan informasi seperti
          batas wilayah, data administratif, dan lain-lain.
        </p>
      </div>
    </section>
  );
};

export default AboutApi;
