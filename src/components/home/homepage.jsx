import React from "react";

function Homepage() {
  return (
    <>
      {/* home section start */}
      <div className="home-container">
        <div className="title-home main-content-home">
          <h2>Lo último</h2>
        </div>
        <div className="home-blog-content main-content-home">
          <div className="row">
            <div className="col">
              <div class="card card-home-content">
                <img
                  src="https://static.wixstatic.com/media/c837a6_684fbc0670df4d17970663d4e5fcd732~mv2.jpg/v1/fill/w_455,h_407,fp_0.50_0.50,q_90,enc_auto/c837a6_684fbc0670df4d17970663d4e5fcd732~mv2.jpg"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-date-home">10 may 2023</p>
                  <a href="">
                    <p className="card-title-home-bg">La marca sin marca</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card card-home-content">
                <img
                  src="https://static.wixstatic.com/media/c837a6_32d7a4c0dc4c49349c0a9af84fb83459~mv2.jpg/v1/fill/w_453,h_584,fp_0.50_0.50,q_90,enc_auto/c837a6_32d7a4c0dc4c49349c0a9af84fb83459~mv2.jpg"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-date-home">10 may 2023</p>
                  <a href="">
                    <p className="card-title-home-bg">
                      ¿BUSCAS INSPIRACIÓN? 15 RECURSOS QUE TE SORPRENDERÁN
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card card-home-content">
                <img
                  src="https://static.wixstatic.com/media/c837a6_61a8e45085564423b55da150c271136c~mv2.jpg/v1/fill/w_455,h_377,fp_0.50_0.50,q_90,enc_auto/c837a6_61a8e45085564423b55da150c271136c~mv2.jpg"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-date-home">10 may 2023</p>
                  <a href="">
                    <p className="card-title-home-bg">73 preguntas a donna fay</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card card-home-content">
                <img
                  src="https://static.wixstatic.com/media/c837a6_c11c1e65b3434138b7a5cbbbbac07111~mv2.jpg/v1/fill/w_453,h_441,fp_0.50_0.50,q_90,enc_auto/c837a6_c11c1e65b3434138b7a5cbbbbac07111~mv2.jpg"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-date-home">10 may 2023</p>
                  <a href="">
                    <p className="card-title-home-bg">
                      ¿Cómo vender una enfermedad?
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* home secc part 2 */}
        <div className="card-home-history-week-container">
          <img
            src="https://static.wixstatic.com/media/84770f_6ead7869ff5a4842aee87b0d58d83504~mv2.jpg/v1/fill/w_2100,h_1094,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_6ead7869ff5a4842aee87b0d58d83504~mv2.jpg"
            alt=""
          />
          <div className="card-img-overlay">
            <h2>Historia de la semana</h2>
            <span>10 may 2023</span>
            <a href="">
              <p className="card-text">
                La historia detrás de &quot;pti: estoy a punto de amarte&quot; -
                Entrevista con kay van hans
              </p>
            </a>
          </div>
        </div>
        {/* home secc part 2 end */}

        {/* home secc part 3 start */}
        <div className="card-home-popular-container main-content-home">
          <div className="title-home-popular">
            <h2>Lo más popular</h2>
          </div>
          <div className="home-popular-content">
            <div className="row">
              <div className="col">
                <div class="card card-popular-hm">
                  <img
                    src="https://static.wixstatic.com/media/84770f_fa58299371f84ccab29edc0d417d1ac3~mv2.jpg/v1/fill/w_641,h_852,fp_0.50_0.50,q_90,enc_auto/84770f_fa58299371f84ccab29edc0d417d1ac3~mv2.jpg"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="date-popular-home">10 may 2023</p>
                    <a href="">
                      <h2>Festival fetch brln 2023</h2>
                      <p className="card-text-popular">
                        Consulta el programa completo del próximo festival. Los
                        boletos ya están a la venta.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card card-popular-hm">
                  <img
                    src="https://static.wixstatic.com/media/84770f_fe6fab9a56414a00976c0d1673796c90~mv2.jpg/v1/fill/w_641,h_852,fp_0.50_0.50,q_90,enc_auto/84770f_fe6fab9a56414a00976c0d1673796c90~mv2.jpg"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="date-popular-home">10 may 2023</p>
                    <a href="#">
                      <h2>365 DÍAS. 365 CUADROS.</h2>
                      <p className="card-text-popular">
                        ¿Qué se aprende de la última obra de Matthew Soja?
                        Fotografías tomadas en el mismo lugar de Oslo durante un
                        año, todos los días.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card card-popular-hm">
                  <img
                    src="https://static.wixstatic.com/media/84770f_c65865dcbe344e959c00cd572c022bfd~mv2.jpg/v1/fill/w_639,h_852,fp_0.50_0.50,q_90,enc_auto/84770f_c65865dcbe344e959c00cd572c022bfd~mv2.jpg"
                    alt="..."
                  />
                  <div class="card-body">
                    <p className="date-popular-home">10 may 2023</p>
                    <a href="#">
                      <h2>20 MUSEOS PARA VISITAR AL MENOS UNA VEZ</h2>
                      <p className="card-text-popular">
                        La lista incluye 10 ciudades de 8 países diferentes.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* home secc part 3 end */}
      </div>
      {/* home section end*/}
    </>
  );
}

export default Homepage;
