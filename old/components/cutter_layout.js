import Head from 'next/head';
import Script from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Mani';
export const siteTitle = 'Cutter Layout';

export default function Layout({ children, home }) {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossOrigin="anonymous"
    />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <link rel="stylesheet" href="static/main_lyrics.css" />
    <title>Parayana Lyric timings</title>
    {"{"}% with messages = get_flashed_messages() %{"}"}
    {"{"}% if messages %{"}"}
    <ul>
      {"{"}% for message in messages %{"}"}
      <li>
        {"{"}
        {"{"} message {"}"}
        {"}"}
      </li>
      {"{"}% endfor %{"}"}
    </ul>
    {"{"}% endif %{"}"}
    {"{"}% endwith %{"}"}
    <p />
    <h3 className="w3-center" style={{ color: "rgb(78, 13, 163)" }}>
      Add timings to Ramanasramam Parayana Lyrics
    </h3>
    <form method="post" action="/lyrics" encType="multipart/form-data">
      <div id="dropdown">
        <label htmlFor="select">Select the audio:</label>
        <select id="videoInput" size={4}></select>
      </div>
      <br />
      <br />
      <dl>
        <p></p>
        <p>
          <b>Upload the audio file: </b>
        </p>
        <input
          type="file"
          id="upload"
          name="file"
          autoComplete="off"
          required=""
        />
        <p />
      </dl>
      <p>
        <input type="submit" id="upload_id" defaultValue="Upload" />
      </p>
      <br />
    </form>
    <div id="play_video_server" style={{ display: "none" }}>
      <video
        id="video_scr_id_server"
        width={800}
        height={100}
        controls=""
      ></video>
    </div>
    <p>
      <b>Upload CSV file: </b>
    </p>
    <input
      name="notification_email_id"
      id="notification_email_id"
      type="file"
      className=""
      accept=".csv"
    />
    <br />
    <br />
    <textarea
      className="form-control"
      name="notification_email"
      id="notification_email"
      style={{ resize: "none" }}
      rows={6}
      placeholder="CSV file only"
      cols={40}
      readOnly="readonly"
      defaultValue={""}
    />
    <div
      id="list"
      style={{ overflowY: "scroll", height: 750, display: "none" }}
    />
    <button
      id="export_csv"
      className="btn"
      style={{ display: "none", position: "fixed" }}
      onclick="csv_export()"
    >
      {" "}
      Export Lyrics with timings <i className="fa fa-check" />
    </button>
  </>
  
  );
}