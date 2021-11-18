import React from "react"
import styled from "styled-components"
import GlobalStyles from "../styles/Global"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const StyledPrivacy = styled.div`
  min-height: calc(100vh - 136px);
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 10rem 1rem;
  }
  h2 {
    font-size: 2.25rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  p {
    font-size: 1rem;
    margin-bottom: 1.25rem;
    line-height: 1.5em;
    a {
      color: #353535;
    }
  }
  .gatsby-image-wrapper {
    margin-top: 0.5rem;
  }
  @media (max-width: 767px) {
    > div {
      padding: 7rem 1rem;
    }
  }
  @media (max-width: 575px) {
    min-height: calc(100vh - 170px);
  }
`

export default function Polityka() {
  return (
    <Layout>
      <StyledPrivacy>
        <div>
          <h2>Polityka prywatności</h2>
          <p>
            Administratorem strony jest Łukasz Motyka, prowadzący działalność
            gospodarczą pod firmą Olotour z siedzibą w Przemyślu, ul. ks.
            Skorupki 11 lok. 15, wpisany do Centralnej Ewidencji i Informacji o
            Działalności Gospodarczej, posługujący się numerem NIP 7952497129.
            <br /> Kontakt z administratorem możliwy pod adresem e-mail:
            <a href="mailto:lukaszmotyka6@wp.pl"> lukaszmotyka6@wp.pl</a>
          </p>
          <p>
            <strong>§1 Definicje</strong> <br />
            1.Na potrzeby niniejszej polityki prywatności, przyjmuje się
            następujące znaczenie poniższych pojęć: <br />
            a) Administrator – Łukasz Motyka, prowadzący działalność gospodarczą
            pod firmą Olotour z siedzibą w Przemyślu, wpisany do Centralnej
            Ewidencji i Informacji o Działalności Gospodarczej, posługujący się
            numerem NIP 7952497129 <br />
            b) Strona – strona internetowa dostępna pod adresem:
            <a href="https://olotour.pl"> https://olotour.pl </a>
            <br />
            c) Użytkownik – każdy podmiot, który korzysta ze Strony.
          </p>
          <p>
            <strong>§2 Dane osobowe</strong> <br />
            1. Użytkownik może przekazywać swoje dane osobowe Administratorowi
            za pomocą formularzy dostępnych na Stronie, takich jak formularz
            kontaktowy.
            <br />
            2. Administratorem danych osobowych Użytkownika jest Administrator.
            <br />
            3. Dane przekazane Administratorowi w ramach formularza kontaktowego
            przetwarzane są w celu poinformowania firmy Olotour o zamiarze
            skorzystania z świadczonych przez nią usług <br />
            4. Administrator gwarantuje poufność wszelkich przekazanych mu
            danych osobowych. <br />
            5. Podanie danych jest zawsze dobrowolne, ale niezbędne do podjęcia
            przez Użytkownika akcji, do której przeznaczony jest dany formularz.
            <br />
            6. Administrator nie udostępnia przekazanych mu danych jakimkolwiek
            podmiotom trzecim. <br />
            7. Dane osobowe są gromadzone z należytą starannością i odpowiednio
            chronione przed dostępem do nich przez osoby do tego nieupoważnione.
            <br />
            8. Użytkownikowi przysługują następujące uprawnienia: a) prawo do
            żądania dostępu do danych osobowych dotyczących osoby, której dane
            dotyczą, ich sprostowania, usunięcia lub ograniczenia przetwarzania,
            b) prawo do wniesienia sprzeciwu wobec przetwarzania, c) prawo do
            przenoszenia danych, d) prawo do cofnięcia zgody na przetwarzanie
            danych osobowych w określonym celu, jeżeli Użytkownik uprzednio taką
            zgodę wyraził, e) prawo do wniesienia skargi do organu nadzorczego w
            związku z przetwarzaniem danych osobowych przez Administratora
            <br />
            9. Administrator informuje niniejszym Użytkownika, że powierza
            przetwarzanie danych osobowych następującym podmiotom: a) Netlify
            Inc., 610 22nd Street Suite 315 San Francisco, CA 94107 United
            States – w celu korzystania z systemu mailingowego Netlify Forms,
            służącego do przesyłania maili.
          </p>
          <p>
            <strong>§3 Pliki cookies</strong> <br />
            1. Administrator nie wykorzystuje aktualnie plików cookies
            (ciasteczek).
          </p>
          <p>
            <strong>§4 Kontakt</strong> <br />
            Skontaktyować się z Olotour można na następujące sposoby: <br />
            1. Poprzez formularz kontaktowy dostępny na stronie głównej <br />
            2. Wysyłając korespondencję na adres: <br />
            Łukasz Motyka <br /> ul. ks. Skorupki 11 lok. 15 <br /> 37-700
            Przemyśl <br />
            3. Wysyłając wiadomość elektroncizną na adres e-mail:{" "}
            <a href="mailto:lukaszmotyka6@wp.pl"> lukaszmotyka6@wp.pl</a>
          </p>
        </div>
      </StyledPrivacy>
    </Layout>
  )
}
