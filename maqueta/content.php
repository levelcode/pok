<div class="content_video"  style="display:none;">

    <canvas id="can" height="" width=""></canvas>

    <canvas id="can_hidden" height="700" width="1024" style="position:relative; z-index:3; border:none;"></canvas>

    <input type="button" value="Play" id="play" class="play" style="text-indent:-9999px; font:18px Helvetica; cursor:pointer;">

    <div id="profile-thumb" style="z-index: 2;position: absolute;left: 33%;-webkit-filter: saturate(53%) brightness(98%) contrast(43%) blur(0.8px);  filter:saturate(53%) brightness(98%) contrast(43%) blur(0.8px); width: 19%; transform: rotate(2deg); "></div>

    <video id="vid" poster="img/bg.png" style="" title="vid_1" webkit-playsinline>

        <source src="eh5v.files/html5video/ARMANDO_BRONCA.m4v" type="video/mp4" />

        <source src="eh5v.files/html5video/ARMANDO_BRONCA.webm" type="video/webm" />

        <source src="eh5v.files/html5video/ARMANDO_BRONCA.ogv" type="video/ogg" />

        <source src="eh5v.files/html5video/ARMANDO_BRONCA.mp4" />

    </video>

    <video id="vid2" poster="img/bg.png" style="" title="vid_1" webkit-playsinline>

        <source src="demo/Gav_green.mp4" />

    </video>

    <div class="content_facebook_connect">

		<div class="border_top"></div>

		<p>Conéctese por Facebook para ayudarle a que sus ”amigos” <br> le paguen las polas que le deben.</p>

		<button id="save" class="boton fb_boton"></button>

	</div><!--/facebook connect-->

</div><!--/video-->


<div class="content_buscar_amigo">

	<div id="step_1">

		<p>

			El que la <span>debe</span> la <span>paga</span>  

		</p>

		<div class="content_reportar">

			<div class="content_form_reportar">

				<div class="border_top_red mobile"></div>

				<p>Reporte aquí a ese amigo que le prometió cerveza de cumpleaños y nunca se la pagó.</p>

				<div class="border_top_red desktop"></div>

				<form action="">

					<img src="img/buscar_amigo.png" alt="">

					<div class="border_gradient">

						<div class="box_amigos_facebook">

						</div>



			        	<input type="text" id="search_friend" placeholder="Buscar a un amigo" class="date">

			        	<button class="buscar"></button>

			        </div>

					<img src="img/cuantas_te_deben.png" class="botella" alt="">

					<div class="border_gradient">

			        	<input type="text" placeholder="¿cuántas polas le deben?" class="date">

			        </div>

					<input type="submit" class="reportar" value="REPORTAR">

				</form>

			</div>

		</div>

	</div>


	<div id="step_2">

		<div class="content_reportar">

			<div class="content_form_reportar reportar_2">

				<p>Después de que esto se haga público la unica opción que tiene su amigo es pagar o pagar esas polas.</p>

				<div class="border_top_red"></div>

				<a href="javascript:void(0);" class="modificar">MODIFICAR</a>

				<a href="javascript:void(0);" class="reportar_facebook"></a>

				<a href="javascript:void(0);" class="reportar_otro_amigo">REPORTAR A OTRO AMIGO</a>

			</div>

		</div>

	</div>

	<div id="step_3">

		<p>

			Es mejor que vaya <span>buscando </span> un <span>abogado</span>

		</p>

		<div class="content_reportar">

			<div class="content_form_reportar reportar_2">

				<div class="border_top_red mobile"></div>

				<p>Si quiere sacarse la espinita usted también puede reportar amigos.</p>

				<div class="border_top_red desktop"></div>

				<a href="javascript:void(0);" class="compartir_facebook">COMPARTIR EN:</a>

				<a href="javascript:void(0);" class="reportar_amigo_final">REPORTAR UN AMIGO</a>

			</div>

		</div>

	</div>





</div>

























<div class="content_pops" style="display:none;">

	<div class="alerta_facebook">

		<a href="javascript:(0);" class="closed_pops"></a>

		<h3>Alerta</h3>

		<div class="border_top_yellow"></div>

		<p>La configuración de su lista de amigos de Facebook es privada, por favor cámbiela temporalmente para continuar con la experiencia.</p>

		<a href="javascript:(0);" class="ir_facebook"></a>

	</div>

</div>

























