import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "利用規約とプライバシー"
}

export default function TermsAndPrivacy() {
    return (
        <main>
            <div className="container">
                <h2>利用規約とプライバシー</h2>
                <p>当サイトは、個人のウェブサイトであり、訪問者の個人情報を収集することはありません。<br />ただし、当サイトを訪問することで収集される情報がありますので、以下に記載します。</p>

                <div className={styles.contents_box}>
                    <section>
                        <h3>IPアドレス、Cookie、その他の情報の収集</h3>
                        <p>当サイトは、訪問者のIPアドレス、Cookie、ウェブブラウザの種類などの情報を収集する場合があります。<br />これらの情報は、訪問者の利用状況を分析するために使用されますが、個人を特定するものではありません。</p>
                    </section>

                    <section>
                        <h3>広告配信について</h3>
                        <p>当サイトは、第三者配信の広告サービスを利用することがあります。<br />広告配信事業者は、Cookieやウェブビーコンなどを使用し、訪問者の興味に応じた広告を表示します。<br />広告配信事業者によるCookieの使用を無効にすることができますので、ブラウザの設定をご確認ください。</p>
                    </section>

                    <section>
                        <h3>外部リンクについて</h3>
                        <p>当サイトは、外部のリンクを含む場合がありますが、外部サイトにおける個人情報の保護については、当サイトは責任を負いかねます。<br />外部サイトへのリンクをクリックされた場合は、リンク先サイトのプライバシーポリシーを確認してください。</p>
                    </section>
                </div>

                <p>当サイトのプライバシーポリシーについてのご質問やご不明な点がございましたら、<a href="mailto:osaru07m@gmail.com">osaru07m@gmail.com</a>にお問い合わせください。</p>
            </div>
        </main>
    )
}
