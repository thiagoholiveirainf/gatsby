import * as React from 'react';
import footerStyles from "./footer.module.css";

export default function Footer({copyRightYear}) {
    return (
        <footer className="{footerStyles.footer}">
            (c) {copyRightYear} - Estudos de Gatsby. Todos os direitos reservados.
        </footer>
    )
}