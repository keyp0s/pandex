import './guide.css'
import Footer from '../../components/footer/Footer'

export default function guide() {
    return (
        <>
            <div className='guide'>
                <h2>A simple guide to ricing</h2>
                <img
                    className='guideImage'
                    src={process.env.PUBLIC_URL +'/img/linux-single-desktop.gif'} 
                    alt='linux desktop'
                />

                <h3>What is ricing?</h3>
                    <p>
                        The term 'rice' first originated from street racing and means Race
                        Inspired Cosmetic Enhancements. It is now commonly used to describe visual customisations to
                        the linux desktop that dont provide any practical benefits.
                    </p>
                <h3>How do I start ricing?</h3>
                    <p>
                        The first step is to choose your distribution. Though you
                        can really use any distribution many people lean towards
                        <a className ='guideLink' href='https://archlinux.org/'> Arch Linux</a> because of its high flexibility.
                    </p>
                    <iframe
                        src='https://www.youtube.com/embed/3WELZSF7wKQ'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                    ></iframe>
                <h3>What can I customise?</h3>
                    <p>Thankfully with Linux almost every aspect of the gui is customisable. There are many pre-made tools freely available to help you with this process</p>
                    <b>Desktop Environment (DE):</b> A desktop environment is a collection of programs bundled together to make a workspace. It comes with a window manager, a panel, a set of default programs (text editor, music player, etc.), a file manager, a terminal emulator, and many, many other things. Some commonly used are
                    <ul>
                        <li><a className="guideLink" href="https://www.gnome.org">Gnome</a></li>
                        <li><a className="guideLink" href="https://ubuntuunity.org/">Unity</a></li>
                        <li><a className="guideLink" href="https://www.kde.org">KDE</a></li>
                    </ul>
                    <b>Window Manager (WM):</b> A window manager is software for an operating system that manages the placement of open windows. There are many window managers for Linux, most commonly used are
                    <ul>
                        <li><a className="guideLink" href="https://i3wm.org">i3</a></li>
                        <li><a className="guideLink" href="http://openbox.org">Openbox</a></li>
                        <li><a className="guideLink" href="https://awesomewm.org">AwesommeWM</a></li>
                        <li><a className="guideLink" href="https://dwm.suckless.org">DWM</a></li>
                    </ul>
                    <b>Status Bars:</b> Status bars are used to display everything from current desktops to active windows to system informaton. They have very similiar behaviour to the bar you would expect on Windows. Some commonly used are
                    <ul>
                        <li><a className="guideLink" href="https://github.com/jaagr/polybar">Polybar</a></li>
                        <li><a className="guideLink" href="https://wiki.archlinux.org/index.php/tint2">Tint</a></li>
                        <li><a className="guideLink" href="https://github.com/LemonBoy/bar">Lemonbar</a></li>
                    </ul>
                    <b>App Launcher:</b> Status bars are used to display everything from current desktops to active windows to system informaton. They have very similiar behaviour to the bar you would expect on Windows. Some commonly used are
                    <ul>
                        <li><a className="guideLink" href="https://tools.suckless.org/dmenu/">Dmenu</a></li>
                        <li><a className="guideLink" href="https://github.com/DaveDavenport/rofi">Rofi</a></li>
                    </ul>
                <h3>Where do I go from here?</h3>
                    <p>
                    If you don't know how to get started the best advice is to just go for it. There are many helpful tutorials on how to start ricing. Though it may seem overwhelming at first once you get the hang of it the possibilites are endless.<br/>
                    <b>Below are some helpful tutorials.</b>
                    </p>
                    <iframe
                        src='https://www.youtube.com/embed/gkI5KbzzrHA'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                    ></iframe>
                    <iframe
                        src='https://www.youtube.com/embed/TutfIwxSE_s'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                    ></iframe>
                    <iframe
                        src='https://www.youtube.com/embed/S1jQfGcKjtA'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                    ></iframe>
            </div>
            <Footer />
        </>
    )
}
