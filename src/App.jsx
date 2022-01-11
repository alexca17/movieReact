import { MoviesGrid } from "./MoviesGrid";
import styles from './App.module.css';

export function App(){
    return <div>
        <header>
            <h1 className={styles.title}>Movies React Alejandro</h1>
            <main>
                <MoviesGrid />
            </main>
        </header>
    </div>
}