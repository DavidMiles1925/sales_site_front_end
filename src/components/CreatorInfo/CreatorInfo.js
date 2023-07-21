import "./CreatorInfo.css";

function CreatorInfo() {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className='creator'>
      <p className='creator__text'>{copyrightYear}</p>
      <p className='creator__text'>||</p>
      <p className='creator__text'>Created By David Miles</p>
    </div>
  );
}

export default CreatorInfo;
