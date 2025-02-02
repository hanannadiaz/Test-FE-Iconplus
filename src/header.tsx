import React from "react";

const Header: React.FC = () => (
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
      <button className="text-white border border-white px-3 py-2 rounded mr-4">
        <i className="fas fa-bullhorn px-2"></i>
        Kontak Aduan
      </button>
      <button className="relative text-white  p-3">
        <i className="fas fa-bell"></i>
        {/* Notification Badge */}
        <span className="absolute top-2 right-1 bg-red-500 text-white text-xs rounded-full px-1">
          3
        </span>
      </button>
      <div className="relative flex items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/68bb/8043/8851b335971c0c86bdc4731a44aeae12?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UiBxNR7Qxw175Ob6IJmaPrVE4uEiSpedubDNENI8JIMEhTLenviYLxWx7097UA3yvoFYcQPizzxrh2sAFi6OfqF6YY0NR32KGif~NuKOn-n9i-Fu4-27uZ9RVbFqF9ye-KV-KKuPTmovslTkiQuEN42Cgo-fahsZg3LWG8EgPmeD4tG6GdzlHocKPVSioVwL9GmXpHwTBHgEfmSrqOCgS8vL04SFZyF1PAA5dIU1bsJa4CEAKLmWw3eZqFusmCpf77b77HmfttKiwmCtfaTta1RW7io7d~6W4BuVoN7nt~UQh-8OD8MlW6wMn~MwpFkuQFEc2BAThRsZ-U7gXEmsYQ__"
          alt="User Avatar"
          className="h-10 w-10 rounded-full"
        />
        <span className="text-white ml-2">John Doe</span>
      </div>
    </div>
  </header>
);

export default Header;
