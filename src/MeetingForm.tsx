import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHome,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const MeetingForm = () => {
  const [unit, setUnit] = useState("");
  const [room, setRoom] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [date, setDate] = useState("28 Juni 2022");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [participants, setParticipants] = useState("");
  const [consumption, setConsumption] = useState<string[]>([]);
  const [cost, setCost] = useState(0);

  const toggleConsumption = (item: string) => {
    setConsumption((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_PLN.png/657px-Logo_PLN.png"
            alt="Company Logo"
            className="h-10 w-10"
          />
          <h1 className="text-white text-xl ml-2">iMeeting</h1>
        </div>
        <div className="flex items-center">
          <button className="text-white mr-4">Kontak Aduan</button>
          <div className="relative flex items-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/h0hXFnb9YpaUYVMK4YfGXnGGbSO_YsWu87e_kABJeeA.jpg"
              alt="User Avatar"
              className="h-10 w-10 rounded-full"
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
            <FontAwesomeIcon icon={faArrowLeft} className="text-gray-600" />
          </button>
          <button className="mb-4">
            <FontAwesomeIcon icon={faHome} className="text-gray-600" />
          </button>
          <button className="mb-4">
            <FontAwesomeIcon icon={faFileAlt} className="text-gray-600" />
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
                <select
                  className="w-full p-2 border rounded"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option>Pilih Unit</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Ruang Meeting</label>
                <select
                  className="w-full p-2 border rounded"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option>Pilih Ruang Meeting</option>
                </select>
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-700">Kapasitas</label>
                <input
                  className="w-full p-2 border rounded bg-gray-100"
                  readOnly
                  type="text"
                  value={capacity}
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Informasi Rapat</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-gray-700">
                  Tanggal Rapat <span className="text-red-500">**</span>
                </label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700">Waktu Mulai</label>
                <select
                  className="w-full p-2 border rounded"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                >
                  <option>Pilih Waktu Mulai</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Waktu Selesai</label>
                <select
                  className="w-full p-2 border rounded"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                >
                  <option>Pilih Waktu Selesai</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Jumlah Peserta</label>
                <input
                  className="w-full p-2 border rounded"
                  placeholder="Masukkan Jumlah Peserta"
                  type="text"
                  value={participants}
                  onChange={(e) => setParticipants(e.target.value)}
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Jenis Konsumsi</h3>
            <div className="flex items-center">
              {["Snack Siang", "Makan Siang", "Snack Sore"].map((item) => (
                <label key={item} className="mr-4">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={consumption.includes(item)}
                    onChange={() => toggleConsumption(item)}
                  />
                  {item}
                </label>
              ))}
            </div>

            <div className="flex justify-end mt-4">
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
  );
};

export default MeetingForm;
