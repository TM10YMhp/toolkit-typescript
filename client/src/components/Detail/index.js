import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrackId } from "../../store/slice";
import { useParams } from "react-router-dom";
import "./index.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { detailTracks } = useSelector((state) => state.music);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getTrackId(id));
  }, [dispatch, id]);

  console.log(detailTracks);

  return (
    <div>
      {detailTracks.track?.map((e, id) => {
        return (
          <div key={id} className="containerMusic">
            <img src={e.images} alt={e.name} className="containerImg" />
            <div className="containerInfo">
              <h1>{e.name}</h1>
              <h2>{e.albumName}</h2>
              <h2>{e.artistName}</h2>
            </div>
          </div>
        );
      })}

      {detailTracks.tracksMusic?.map((e, id) => {
        return (
          <div key={id}>
            <div className="divTracks">
              <li className="liTracks">
                <div className="containerLi">
                <button>
                    <div className="arrow-up"></div>
                </button>
                  <p className="name">{e.name}</p>
                  <p className="artistName">{e.artistName}</p>
                  <p className="seconds">{e.playbackSeconds}</p>
                  {/* {e.previewURL} */}
                </div>
              </li>
            </div>
          </div>
        );
      })}

      {detailTracks.album?.map((e, id) => {
        return (
            <div key={id} className="containerMusic">
            <img src={e.images} alt={e.name} className="containerImg" />
            <div className="containerInfo">
              <h1>{e.name}</h1>
              <h2>{e.albumName}</h2>
              <h2>{e.artistName}</h2>
            </div>
          </div>
        );
      })}

      {detailTracks.albumMusic?.map((e, id) => {
        return (
            <div key={id}>
            <div className="divTracks">
              <li className="liTracks">
                <div className="containerLi">
                <button>
                    <div className="arrow-up"></div>
                </button>
                  <p className="name">{e.name}</p>
                  <p className="artistName">{e.artistName}</p>
                  <p className="seconds">{e.playbackSeconds}</p>
                  {/* {e.previewURL} */}
                </div>
              </li>
            </div>
          </div>
        );
      })}

      {detailTracks.artist?.map((e, id) => {
        return (
            <div key={id} className="containerMusic">
            <img src={e.images} alt={e.name} className="containerImg" />
            <div className="containerInfo">
              <h1>{e.name}</h1>
              <h2>{e.albumName}</h2>
              <h2>{e.artistName}</h2>
            </div>
          </div>
        );
      })}

      {detailTracks.artistMusic?.map((e, id) => {
        return (
            <div key={id}>
            <div className="divTracks">
              <li className="liTracks">
                <div className="containerLi">
                <button>
                    <div className="arrow-up"></div>
                </button>
                  <p className="name">{e.name}</p>
                  <p className="artistName">{e.artistName}</p>
                  <p className="seconds">{e.playbackSeconds}</p>
                  {/* {e.previewURL} */}
                </div>
              </li>
            </div>
          </div>
        );
      })}

      {detailTracks.playlist?.map((e, id) => {
        return (
            <div key={id} className="containerMusic">
            <img src={e.images} alt={e.name} className="containerImg" />
            <div className="containerInfo">
              <h1>{e.name}</h1>
              <h2>{e.albumName}</h2>
              <h2>{e.artistName}</h2>
            </div>
          </div>
        );
      })}

      {detailTracks.playlistMusic?.map((e, id) => {
        return (
            <div key={id}>
            <div className="divTracks">
              <li className="liTracks">
                <div className="containerLi">
                <button>
                    <div className="arrow-up"></div>
                </button>
                  <p className="name">{e.name}</p>
                  <p className="artistName">{e.artistName}</p>
                  <p className="seconds">{e.playbackSeconds}</p>
                  {/* {e.previewURL} */}
                </div>
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
}
