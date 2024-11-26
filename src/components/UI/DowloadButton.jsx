const DownloadButton = ({ icon, text }) => {
  return (
    <button className="dowload_btn">
      <img src={icon} alt="play-marcet-icon" />
      <p className="dowload_text">{text}</p>
    </button>
  );
};

export default DownloadButton;
