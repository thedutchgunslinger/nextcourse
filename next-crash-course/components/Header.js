import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}><span>Yeetus</span>Deletus</h1>
            <p className={headerStyles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet accusamus mollitia autem, illum ex quasi veritatis alias itaque laudantium perferendis?</p>
        </div>
    );
}

export default Header;