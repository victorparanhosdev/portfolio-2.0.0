import * as React from "react"


type LogoProps = React.SVGProps<SVGSVGElement> 

const Logo = ({...props }:LogoProps) =>  {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150.2" {...props}>
        <path
          stroke={props.stroke}
          d="M12.2 70.5s-.1 9.8 8.6 21.6c2.3 3.2 5.1 6 8.2 8.4 4.8 3.6 10.7 5.6 16.7 5.5V70.5H12.2z"
        />
        <path
          stroke={props.stroke}
          d="M90.4 13.2C64.9 13.2 44 34.1 44 59.5v76.1s10.9 1.1 24.4-10.7c8.6-7.4 10.5-14 10.5-17.1V59.5c.1-6.3 5.2-11.3 11.5-11.4 6.1 0 11 5.3 11 11.4.1 6-4.8 10.9-10.8 10.9h-1.9V106h1.7c25.5 0 46.4-21 46.4-46.4s-20.9-46.4-46.4-46.4z"
        />
      </svg>
    )
}
export default Logo