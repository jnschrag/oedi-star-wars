<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Data Wars</title>

  <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- Custom styles for this template -->
    <link href="http://fonts.googleapis.com/css?family=Raleway:800,900" rel="stylesheet" type="text/css">
	<link href="http://fonts.googleapis.com/css?family=Merriweather:400,700" rel="stylesheet" type="text/css">

    <link href="css/styles.css" rel="stylesheet">

  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body>

	<section id="opening">

		<div class="container">

			<h1>DATA WARS</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<p class="char-error"></p>

			<div class="row">
				<div class="col-xs-12 col-sm-2">
					<div class="oedi"></div>
				</div>
				<div class="col-xs-12 col-sm-2">
					<div class="luke" id="luke_costume"></div>
				</div>
				<div class="col-xs-12 col-sm-2">
					<div class="yoda" id="yoda_costume"></div>
				</div>
				<div class="col-xs-12 col-sm-2">
					<div class="leia" id="leia_costume"></div>
				</div>
				<div class="col-xs-12 col-sm-2">
					<div class="han" id="han_costume"></div>
				</div>
			</div>

			<button id="play" type="submit">Play</button>
			<button id="skip" type="submit">Skip</button>

		</div>

	</section>

	<section id="flight">

		<div class="ship"></div>

		<div class="container">

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

		</div>

	</section>

	<section id="quiz">
		<div class="container">
			<!-- START QUIZ CONTAINER -->
			<div class="quiz_container">
				<p>Help OEDI free the open election data principles by answering these questions!</p>
				<?php include("quizform.php"); ?>
			</div>
			<!-- END QUIZ CONTAINER -->

			<!-- START BATTLE CONTAINER -->
			<div class="battle_container">

				<!-- START OEDI-WAN -->
				<div id="oedi-wan"></div>
				<!-- END OEDI-WAN -->

				<!-- START OEDI -->
				<div id="oedi">
					<div class="leia"></div>
					<div class="yoda"></div>
					<div class="luke"></div>
					<div id="blaster">
						<div class="lazer shot0"></div>
						<div class="lazer shot1"></div>
						<div class="lazer shot2"></div>
					</div>
				</div>
				<!-- END OEDI -->

				<!-- START JABBA CONTAINER -->
				<div class="jabba_container">
					<div id="jabba">
						<!-- <div id="mouth" class="mouth smile"></div> -->
						<div class="mouth">
							<svg id="morph-example" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129.9 29.41" >
							    <path id="smile" fill="#344713" d="M16.33 24.09c8.83.67 41.2-9.6 46.8-11s22.53-1.27 26 .83c2.83 1.33 13 1 21 1.5 6.42-.87 10-7.17 17.52-15.43-3.82 10.94-14.49 19.44-18.82 18.44-14.32-1-23.73-2.33-25.83-2.33s-15.22-.22-17.67.83-6.75.37-12 3.52-18.5 4.95-21.7 5.31-9.06 2.2-13.13 2C11 27.43.33 20.09 0 8.43c2 3.16 12.48 17.41 16.33 15.66z" />
								<path id="frown" style="visibility:hidden" d="M.02 28.64s19.6-6.65 23.45-8.4S56.72 2.39 62.32.99s23.1-1.4 26.6.7 14 9.45 21.35 10.5 20.3 5.95 19.6 7.7-19.6-3.5-21.7-4.2-23.45-12.6-25.55-12.6-14.35-1.05-16.8 0-8 2.1-13.3 5.25-18.5 12.94-21.7 13.3-10.85 1.4-14.35 3.5-14.2 4.5-15.45 4.25-1-.75-1-.75z" />
								<path id="smile2" style="visibility:hidden" d="M16.33 24.09c8.83.67 41.2-9.6 46.8-11s22.53-1.27 26 .83c2.83 1.33 13 1 21 1.5 6.42-.87 10-7.17 17.52-15.43-3.82 10.94-14.49 19.44-18.82 18.44-14.32-1-23.73-2.33-25.83-2.33s-15.22-.22-17.67.83-6.75.37-12 3.52-18.5 4.95-21.7 5.31-9.06 2.2-13.13 2C11 27.43.33 20.09 0 8.43c2 3.16 12.48 17.41 16.33 15.66z" />
							</svg>
						</div>
					</div>
					<div id="platform"></div>
					<div class="captured_principles_container">
						<ul class="flex-container">
							<li class="flex-item cp colors green g0" data-color="green" data-order="1"></li>
							<li class="flex-item cp colors blue g0" data-color="blue" data-order="2"></li>
							<li class="flex-item cp colors tomato g0" data-color="tomato" data-order="3"></li>
							<li class="flex-item cp colors yellow g1" data-color="yellow" data-order="4"></li>
							<li class="flex-item cp colors dgreen g1" data-color="dgreen" data-order="5"></li>
							<li class="flex-item cp colors purple g1" data-color="purple" data-order="6"></li>
							<li class="flex-item cp colors orange g2" data-color="orange" data-order="7"></li>
							<li class="flex-item cp colors bblue g2" data-color="bblue" data-order="8"></li>
							<li class="flex-item cp colors pink g2" data-color="pink" data-order="9"></li>
						</ul>
					</div>
				</div>
				<!-- END JABBA -->
			</div>
			<!-- END BATTLE CONTAINER -->

		</div>
	</section>

	<!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="js/transit.js"></script>
	<script src="https://cdn.jsdelivr.net/kute.js/1.5.0/kute.min.js"></script> <!-- core KUTE.js -->
	<script src="https://cdn.jsdelivr.net/kute.js/1.5.0/kute-svg.min.js"></script>
	<script src="js/datawars.js"></script>

</body>
</html>