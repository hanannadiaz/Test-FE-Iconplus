import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHome,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

interface Room {
  id: string;
  name: string;
  capacity: number;
  masterRoomId: string;
}

interface MasterRoom {
  id: string;
  name: string;
}

interface Consumption {
  id: string;
  name: string;
}

const MeetingForm = () => {
  const [masterRooms, setMasterRooms] = useState<MasterRoom[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [consumptions, setConsumptions] = useState<Consumption[]>([]);
  const [unit, setUnit] = useState("");
  const [room, setRoom] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [date, setDate] = useState("28 Juni 2022");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [participants, setParticipants] = useState("");
  const [selectedConsumptions, setSelectedConsumptions] = useState<string[]>(
    []
  );

  useEffect(() => {
    fetch(
      "https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterOffice"
    )
      .then((res) => res.json())
      .then((data) => setMasterRooms(data))
      .catch((err) => console.error("Error fetching master rooms:", err));

    fetch(
      "https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterMeetingRooms"
    )
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((err) => console.error("Error fetching rooms:", err));

    fetch(
      "https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/masterJenisKonsumsi"
    )
      .then((res) => res.json())
      .then((data) => setConsumptions(data))
      .catch((err) => console.error("Error fetching consumptions:", err));
  }, []);

  useEffect(() => {
    const selectedRoom = rooms.find((r) => r.id === room);
    if (selectedRoom) setCapacity(selectedRoom.capacity);
  }, [room, rooms]);

  const toggleConsumption = (id: string) => {
    setSelectedConsumptions((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 flex justify-between items-center">
        <h1 className="text-white text-xl">iMeeting</h1>
      </header>
      <div className="flex flex-1">
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
        <main className="flex-1 p-8">
          <h2 className="text-2xl font-semibold mb-4">Ruang Meeting</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Informasi Ruang Meeting
            </h3>
            <label className="block text-gray-700">Pilih Unit</label>
            <select
              className="w-full p-2 border rounded"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="">Pilih Unit</option>
              {masterRooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
            <label className="block text-gray-700 mt-4">
              Pilih Ruang Meeting
            </label>
            <select
              className="w-full p-2 border rounded"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            >
              <option value="">Pilih Ruangan</option>
              {rooms
                .filter((r) => r.masterRoomId === unit)
                .map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
            </select>
            <label className="block text-gray-700 mt-4">Kapasitas</label>
            <input
              className="w-full p-2 border rounded bg-gray-100"
              type="text"
              value={capacity}
              readOnly
            />
            <h3 className="text-xl font-semibold mt-6 mb-4">Jenis Konsumsi</h3>
            <div className="flex flex-wrap">
              {consumptions.map((item) => (
                <label key={item.id} className="mr-4">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedConsumptions.includes(item.id)}
                    onChange={() => toggleConsumption(item.id)}
                  />
                  {item.name}
                </label>
              ))}
            </div>
            <div className="flex justify-end mt-4">
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
