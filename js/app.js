/*==============================================================================
 Author:         Georgios Panayiotou
 Created:        2013-04-10
 URL:            https://github.com/gpanayiotou
 URL:            https://github.com/philharmoniker/philharmoniker-app
 Institution:    HAW Hamburg
 Faculty:        Design, Medien und Information
 Department:     Medientechnik
 Project:        Berliner Philharmoniker Projekt, Dirigenten App

 Copyright (C) 2013  Georgios Panayiotou

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 =============================================================================*/

/**
 * @fileoverview Tutorial und Gamemode-Funktionen.
 */

define(function() {
  'use strict';

  return {
    /**
     * Init Funktion für eine Spielrunde, setzt Listener und Variablen
     */
    init_game: function() {
      'use strict';

      EDUPHIL.game_is_running = true;

      // Intro-loop sound aus!
      EDUPHIL.tuning_sound.fadeOut(0, 2000);

      // Musiker Steuerung anhängen, Info abhängen
      $('.hitbox').off('taphold').on('tap', EDUPHIL.musician_tap_handler);

      // Mood Icons Events anhängen
      $('.mood-icon').on('touchstart', EDUPHIL.icon_drag_handler);

      // Aktiviere den Gesten Canvas
      $('#fagott').on('tap', EDUPHIL.gestures_init);

      // Markierungen entfernen
      $('#marker').remove();


      //EDUPHIL.createParticle();
      //setInterval(EDUPHIL.loop, 1000 / 60);
    },

    /**
     * Stop Funktion für eine Spielrunde, entfernt Listener und resettet
     */
    stop_game: function(){
      'use strict';

      EDUPHIL.game_is_running = false;

      // Intro-loop sound aus!
      EDUPHIL.tuning_sound.fadeIn(0, 2000);

      // Musiker Steuerung anhängen, Info abhängen
      $('.hitbox').off('tap').on('taphold', EDUPHIL.musician_taphold_handler);

      // Mood Icons Events anhängen
      $('.mood-icon').off('touchstart');

      // Aktiviere den Gesten Canvas
      $('#fagott').off('tap');
    }
  };
});
