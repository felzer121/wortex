import React from 'react'
import './style.scss'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__content'>
                <div className='footer__title'>
                    <h3 className='logo'>{`C</>der`}</h3>
                    <p>Онлайн школа программирования</p>
                    <div>
                        <svg style={{marginRight: '20px'}} width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.2998 20.9998C27.2998 22.6707 26.6361 24.2731 25.4546 25.4546C24.2731 26.6361 22.6707 27.2998 20.9998 27.2998C19.329 27.2998 17.7265 26.6361 16.5451 25.4546C15.3636 24.2731 14.6998 22.6707 14.6998 20.9998C14.6998 20.6407 14.7376 20.29 14.8027 19.9498H12.5998V28.3435C12.5998 28.9273 13.0723 29.3998 13.6561 29.3998H28.3456C28.6254 29.3993 28.8936 29.2878 29.0912 29.0897C29.2888 28.8917 29.3998 28.6233 29.3998 28.3435V19.9498H27.1969C27.262 20.29 27.2998 20.6407 27.2998 20.9998ZM20.9998 25.1998C21.5515 25.1997 22.0978 25.0909 22.6074 24.8797C23.1171 24.6684 23.5801 24.3588 23.9701 23.9686C24.3601 23.5784 24.6695 23.1152 24.8805 22.6055C25.0915 22.0957 25.2 21.5494 25.1998 20.9977C25.1997 20.4461 25.0909 19.8998 24.8797 19.3902C24.6684 18.8805 24.3588 18.4175 23.9686 18.0275C23.5784 17.6375 23.1152 17.3281 22.6055 17.1171C22.0957 16.9061 21.5494 16.7976 20.9977 16.7977C19.8836 16.798 18.8151 17.2409 18.0275 18.0289C17.2398 18.817 16.7975 19.8857 16.7977 20.9998C16.798 22.114 17.2409 23.1825 18.0289 23.9701C18.817 24.7578 19.8857 25.2001 20.9998 25.1998ZM26.0398 16.5898H28.5577C28.725 16.5898 28.8855 16.5235 29.004 16.4054C29.1224 16.2874 29.1893 16.1271 29.1898 15.9598V13.4419C29.1898 13.2743 29.1232 13.1135 29.0047 12.995C28.8862 12.8764 28.7254 12.8098 28.5577 12.8098H26.0398C25.8722 12.8098 25.7114 12.8764 25.5929 12.995C25.4743 13.1135 25.4077 13.2743 25.4077 13.4419V15.9598C25.4098 16.3063 25.6933 16.5898 26.0398 16.5898ZM20.9998 0.839844C15.6531 0.839844 10.5253 2.96384 6.74457 6.74457C2.96384 10.5253 0.839844 15.6531 0.839844 20.9998C0.839844 26.3466 2.96384 31.4744 6.74457 35.2551C10.5253 39.0359 15.6531 41.1598 20.9998 41.1598C23.6473 41.1598 26.2688 40.6384 28.7147 39.6253C31.1607 38.6121 33.3831 37.1271 35.2551 35.2551C37.1271 33.3831 38.6121 31.1607 39.6253 28.7147C40.6384 26.2688 41.1598 23.6473 41.1598 20.9998C41.1598 18.3524 40.6384 15.7309 39.6253 13.2849C38.6121 10.839 37.1271 8.6166 35.2551 6.74457C33.3831 4.87254 31.1607 3.38757 28.7147 2.37443C26.2688 1.3613 23.6473 0.839844 20.9998 0.839844ZM31.4998 29.1667C31.4998 30.4498 30.4498 31.4998 29.1667 31.4998H12.8329C11.5498 31.4998 10.4998 30.4498 10.4998 29.1667V12.8329C10.4998 11.5498 11.5498 10.4998 12.8329 10.4998H29.1667C30.4498 10.4998 31.4998 11.5498 31.4998 12.8329V29.1667Z" fill="white"/>
                        </svg>
                        <svg style={{marginRight: '20px'}} width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_330:31)">
                                <path d="M42.0001 21.1288C42.0001 9.45806 32.5974 -0.00244141 21.0001 -0.00244141C9.39762 0.000183594 -0.00512695 9.45806 -0.00512695 21.1314C-0.00512695 31.6761 7.67562 40.4173 17.7136 42.0028V27.2372H12.3849V21.1314H17.7189V16.4721C17.7189 11.1774 20.8557 8.25318 25.6516 8.25318C27.9511 8.25318 30.353 8.66531 30.353 8.66531V13.8628H27.7044C25.0977 13.8628 24.284 15.4929 24.284 17.1651V21.1288H30.1062L29.177 27.2346H24.2814V42.0002C34.3194 40.4147 42.0001 31.6734 42.0001 21.1288Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_330:31">
                                    <rect width="42" height="42" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg style={{marginRight: '20px'}} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.9998 0.839844C9.86564 0.839844 0.839844 9.86564 0.839844 20.9998C0.839844 32.134 9.86564 41.1598 20.9998 41.1598C32.134 41.1598 41.1598 32.134 41.1598 20.9998C41.1598 9.86564 32.134 0.839844 20.9998 0.839844ZM28.753 23.5849C28.753 23.5849 30.5359 25.3447 30.9748 26.1616C30.9874 26.1784 30.9937 26.1952 30.9979 26.2036C31.1764 26.5039 31.2184 26.737 31.1302 26.9113C30.9832 27.2011 30.4792 27.3439 30.307 27.3565H27.157C26.9386 27.3565 26.4808 27.2998 25.9264 26.9176C25.5001 26.6194 25.0801 26.1301 24.6706 25.6534C24.0595 24.9436 23.5303 24.3304 22.9969 24.3304C22.9292 24.3303 22.8619 24.341 22.7974 24.3619C22.3942 24.4921 21.8776 25.0675 21.8776 26.6005C21.8776 27.0793 21.4996 27.3544 21.2329 27.3544H19.7902C19.2988 27.3544 16.7389 27.1822 14.4709 24.7903C11.6947 21.8608 9.19574 15.985 9.17474 15.9304C9.01724 15.5503 9.34274 15.3466 9.69764 15.3466H12.8791C13.3033 15.3466 13.4419 15.6049 13.5385 15.8338C13.6519 16.1005 14.0677 17.161 14.7502 18.3538C15.8569 20.2984 16.5352 21.088 17.0791 21.088C17.1811 21.0868 17.2813 21.0609 17.371 21.0124C18.0808 20.6176 17.9485 18.0871 17.917 17.5621C17.917 17.4634 17.9149 16.4302 17.5516 15.9346C17.2912 15.5755 16.8481 15.439 16.5793 15.3886C16.6881 15.2385 16.8315 15.1168 16.9972 15.0337C17.4844 14.7901 18.3622 14.7544 19.2337 14.7544H19.7188C20.6638 14.767 20.9074 14.8279 21.2497 14.914C21.9427 15.0799 21.9574 15.5272 21.8965 17.0581C21.8776 17.4928 21.8587 17.9842 21.8587 18.5638C21.8587 18.6898 21.8524 18.8242 21.8524 18.967C21.8314 19.7461 21.8062 20.6302 22.3564 20.9935C22.4282 21.0385 22.5111 21.0625 22.5958 21.0628C22.7869 21.0628 23.3623 21.0628 24.9205 18.3895C25.4011 17.5291 25.8187 16.6349 26.17 15.7141C26.2015 15.6595 26.2939 15.4915 26.4031 15.4264C26.4837 15.3854 26.5731 15.3645 26.6635 15.3655H30.4036C30.811 15.3655 31.0903 15.4264 31.1428 15.5839C31.2352 15.8338 31.126 16.5961 29.4187 18.9082L28.6564 19.9141C27.1087 21.9427 27.1087 22.0456 28.753 23.5849Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className='footer__info'>
                    <h4>О школе</h4>
                    <p>Актуальные языки программирования. Программа обучения позволяет самостоятельно выбирать направление, языки и учебные проекты которые вы будете реализовывать</p>
                </div>
                <div className='footer__contacts'>
                    <h4>Контакты</h4>
                    <ul>
                        <li>+7 (999) 155 42 39</li>
                        <li>telegram</li>
                        <li>whatsApp</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}