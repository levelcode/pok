<div class="content_facebook_connect">

	<div class="border_top"></div>

	<p>Conéctese por Facebook para ayudarle a que sus ”amigos” <br> le paguen las polas que le deben.</p>

	<button id="save" class="boton fb_boton"></button>

</div><!--/facebook connect-->





<div class="content_video" style="display:none">
	<div id="contenedor_videos">
	    <!--input type="button" value="Play" id="play" class="play"-->

	    <div id="profile-thumb" class="profile-thumb">
	    	<?php
	    			if(isset($_GET["id"])){
		        ?>
		        <img src=<?php echo '"'.'uploads/'.$_GET["id"].'_p.jpg'.'"';?>/>
		        <?php
		        }else{ }

		        ?>
	    </div>
	    <div class="banner"><img src="img/banner.gif" alt=""></div>

	    <div class="marco_video">
			<a href="javascript:void(0);">
	    		<img src="img/play_vid2.png" class="play_vid2" alt="">
	    	</a>
	    </div>

		<!--First video-->
	    <video id="vid" src="videos/inv/inv.mp4" style="" title="vid_1" webkit-playsinline playsinline>
	        <source src="videos/inv/inv.webm" type="video/webm" />
	        <source src="videos/inv/inv.ogg" type="video/ogg" />
	    </video>

	    <!--Second video-->
	    <video id="vid2" src="videos/rep_en3/rep1_opc1.mp4" class="vid2" poster="img/bg.png"  title="vid_1" webkit-playsinline playsinline>
	    	<source src="videos/rep_en3/rep1_opc1.webm" type="video/webm" />
	    	<source src="videos/rep_en3/rep1_opc1.ogg" type="video/ogg" />
	    </video>

		<!--third video-->
	    <video id="vid2a" src="videos/rep_en3/rep2.mp4" class="vid2" poster="img/bg.png" title="vid_2" webkit-playsinline playsinline>
	    	<source src="videos/rep_en3/rep2.webm" type="video/webm" />
	    	<source src="videos/rep_en3/rep2.ogg" type="video/ogg" />
	    	<canvas class="c"></canvas>
	    </video>

		<!--Last video-->
	    <video id="vid2b" src="videos/rep_en3/rep3.mp4" class="vid2" poster="img/bg.png" title="vid_2" webkit-playsinline playsinline>
	    	<source src="videos/rep_en3/rep3.webm" type="video/webm" />
	    	<source src="videos/rep_en3/rep3.ogg" type="video/ogg" />
	    </video>
    </div>

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

				<form id="publish_friend">

					<img src="img/buscar_amigo.png" alt="">

					<div class="border_gradient">

						<div class="box_amigos_facebook"></div><!--facebook friends dinamicaly loaded-->


			        	<input type="text" id="search_friend" placeholder="Buscar a un amigo" class="date" required>
			        	<input type="hidden" id="photo_friend">
			        	<input type="hidden" id="id_friend">


			        	<button class="buscar"></button>

			        </div>

					<img src="img/cuantas_te_deben.png" class="botella" alt="">

					<div class="border_gradient">

			        	<input type="number" min="1" max="99" id="beers_input" placeholder="¿cuántas polas le deben?" class="date" required><span id="errmsg"></span>

			        </div>

					<input type="submit" class="reportar" value="Crear Reporte">

				</form>

			</div>

		</div>

	</div>


	<div id="step_2">

		<div class="content_reportar">

			<div class="content_form_reportar reportar_2">

				<p>Después de que esto se haga público la única opción que tiene su amigo es pagar o pagar esas polas.</p>

				<div class="border_top_red"></div>

				<a href="javascript:void(0);" class="modificar">MODIFICAR</a>

				<a class="reportar_facebook" id="push_public"></a>

				<a href="javascript:void(0);"  class="reportar_otro_amigo">REPORTAR A OTRO AMIGO</a>

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

























