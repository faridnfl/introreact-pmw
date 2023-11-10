import Image from 'next/image'
import styles from './page.module.css'
import HelloButton from './buttons/button'

export default function Home() {
  return (
    <div>
      <section style={{width: "1200px", height: "600px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",}}>
        <h1 style={{marginBottom: "20px", fontSize: "30px",}}>
          Welcome to my App
        </h1>
        <HelloButton buttonText={"Farid Naufal Afiq"} buttonText2={"Pemrograman web"} />
      </section>
    </div>
  )
}
