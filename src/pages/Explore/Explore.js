import React from "react";
import a from "../../assets/a.png";
import b from "../../assets/b.png";
import c from "../../assets/c.png";
import d from "../../assets/d.png";
import e from "../../assets/e.png";
import f from "../../assets/f.png";
import g from "../../assets/g.png";
import h from "../../assets/h.png";
import i from "../../assets/i.png";
import j from "../../assets/j.png";
import k from "../../assets/k.png";
import l from "../../assets/l.png";
import m from "../../assets/m.png";
import Header from "../../components/Header/Header";
import Container from "../../components/HomeComponents/HomeContainer/Container";
import "./Explore.css";

function Explore() {
  return (
    <Container>
      <div style={{ width: "100%", margin: "0px auto" }}>
        <Header />
        <div className='container_explore'>
          <div>
            {" "}
            <img src={a} alt='bnollar explore' />{" "}
          </div>
          <div>
            <img src={b} alt='bnollar explore' />
          </div>
          <div>
            <img src={d} alt='bnollar explore' />
          </div>
          <div>
            <img src={e} alt='bnollar explore4' />
          </div>
          <div className='box1'>
            <img src={c} alt='bnollar explore' />
          </div>
          <div>
            <img src={f} alt='bnollar explore' />
          </div>
          <div>
            <img src={g} alt='bnollar explore' />
          </div>
          <div>
            <img src={h} alt='bnollar explore' />
          </div>
          <div>
            <img src={i} alt='bnollar explore' />
          </div>
          <div>
            <img src={j} alt='bnollar explore0' />
          </div>
          <div>
            <img src={k} alt='bnollar explore1' />
          </div>
          <div>
            <img src={l} alt='bnollar explore2' />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Explore;
