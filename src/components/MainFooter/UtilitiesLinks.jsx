import DcLogo from '../../assets/img/dc-logo-bg.png';

export default function UtilitiesLinks () {

  return (
    <section className='utilities-links'>
      <div className='container'>
        <div className="links-list">
            <ul>
                <li>DC COMICS</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
            </ul>
            
        </div>
        <div className="dc-img">
            <img src={DcLogo} alt="" />
        </div>
      </div>
    </section>
  )
}