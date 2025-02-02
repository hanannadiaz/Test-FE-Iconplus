<>
  <title>Ruang Meeting</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <div className="min-h-screen flex flex-col">
    {/* Header */}
    <header className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          alt="Company Logo"
          className="h-10 w-10"
          height={40}
          src="https://storage.googleapis.com/a1aa/image/IJyQiNG1ujOcNaRsAtvho-eayFMwOthXbAjkSfsCEBE.jpg"
          width={40}
        />
        <h1 className="text-white text-xl ml-2">iMeeting</h1>
      </div>
      <div className="flex items-center">
        <button className="text-white mr-4">Kontak Aduan</button>
        <div className="relative">
          <img
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
            height={40}
            src="https://storage.googleapis.com/a1aa/image/h0hXFnb9YpaUYVMK4YfGXnGGbSO_YsWu87e_kABJeeA.jpg"
            width={40}
          />
          <span className="text-white ml-2">John Doe</span>
        </div>
      </div>
    </header>
    {/* Main Content */}
    <div className="flex flex-1">
      {/* Sidebar */}
      <aside className="bg-white w-16 flex flex-col items-center py-4">
        <button className="mb-4">
          <i className="fas fa-arrow-left text-gray-600"></i>
        </button>
        <button className="mb-4">
          <i className="fas fa-home text-gray-600"></i>
        </button>
        <button className="mb-4">
          <i className="fas fa-file-alt text-gray-600"></i>
        </button>
      </aside>
      {/* Form Section */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-4">Ruang Meeting</h2>
        <p className="text-gray-600 mb-8">Ruang Meeting &gt; Pesan Ruangan</p>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Informasi Ruang Meeting
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-gray-700">Unit</label>
              <select className="w-full p-2 border rounded">
                <option>Pilih Unit</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Ruang Meeting</label>
              <select className="w-full p-2 border rounded">
                <option>Pilih Ruang Meeting</option>
              </select>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700">Kapasitas</label>
              <input
                className="w-full p-2 border rounded bg-gray-100"
                readOnly=""
                type="text"
                defaultValue={0}
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Informasi Rapat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-gray-700">
                Tanggal Rapat
                <span className="text-red-500">**</span>
              </label>
              <div className="relative">
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  defaultValue="28 Juni 2022"
                />
                <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-500"></i>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Waktu Mulai</label>
              <select className="w-full p-2 border rounded">
                <option>Pilih Waktu Mulai</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Waktu Selesai</label>
              <select className="w-full p-2 border rounded">
                <option>Pilih Waktu Selesai</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Jumlah Peserta</label>
              <input
                className="w-full p-2 border rounded"
                placeholder="Masukkan Jumlah Peserta"
                type="text"
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-gray-700">Jenis Konsumsi</label>
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" />
              <label className="mr-4">Snack Siang</label>
              <input className="mr-2" type="checkbox" />
              <label className="mr-4">Makan Siang</label>
              <input className="mr-2" type="checkbox" />
              <label>Snack Sore</label>
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-gray-700">Nominal Konsumsi</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">Rp.</span>
              <input
                className="w-full p-2 pl-10 border rounded bg-gray-100"
                readOnly=""
                type="text"
                defaultValue={0}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-red-500 text-white px-4 py-2 rounded mr-2">
              Batal
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
              Simpan
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</>;
