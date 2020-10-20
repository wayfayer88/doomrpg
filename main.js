let start = document.querySelector('.start')
start.onclick = function() {
	let e1m1 = function() {
        var audio = new Audio()
        audio.src = 'sounds/e1m1.mp3'
        audio.autoplay = true
        audio.volume = 0.1
    }
	e1m1()
	let menu = document.querySelector('.menu')
	menu.style.display = 'none'
	let main = document.querySelector('.main')
	main.style.display = 'block'
	let doomguy = document.querySelector('.doomguy')
	let bg = document.querySelector('.bg')
	let map = document.querySelector('.map')
	let loc1 = document.querySelector('.loc1')
	let loc2 = document.querySelector('.loc2')
	let loc3 = document.querySelector('.loc3')
	let loc4 = document.querySelector('.loc4')
	let loc5 = document.querySelector('.loc5')
	let loc6 = document.querySelector('.loc6')
	let loc7 = document.querySelector('.loc7')
	let loc8 = document.querySelector('.loc8')
	let loc1Transition = function() {
		main.style.display = 'none'
		map.style.display = 'block'
	}
	let loc2Transition = function() {
		map.style.display = 'block'
		main.style.display = 'none'
	}
	let soldier1 = {
		class: document.querySelector('.soldier1'),
		hp: 100,
		damage: 5,
		status: true,
	}
	let soldier2 = {
		class: document.querySelector('.soldier2'),
		hp: 100,
		damage: 5,
		status: true,
	}
	let doomguy1 = {
		status: true,
		hp: 100,
		armor: 50,
		hpLink: document.querySelector('.health'),
		armorLink: document.querySelector('.armor'),
	}
	doomguy1.hpLink.innerHTML = doomguy1.hp
	doomguy1.armorLink.innerHTML = doomguy1.armor
	let face = document.querySelector('.face')
	let weapon = document.querySelector('.weapon')
	let weapon2 = document.querySelector('.weapon2')
	let weapon3 = document.querySelector('.weapon3')
	let weapon4 = document.querySelector('.weapon4')
	let weapon5 = document.querySelector('.weapon5')
	let weapon6 = document.querySelector('.weapon6')
	let hit = document.querySelector('.hit')
	let pistol = document.querySelector('.pistol')
	let shotgun = document.querySelector('.shotgun')
	let chaingun = document.querySelector('.chaingun')
	let plasmaGun = document.querySelector('.plasmaGun')
	let rocketLauncher = document.querySelector('.rocketLauncher')
	let bfg = document.querySelector('.BFG')
	let slot1 = false
	let slot2 = false
	let slot3 = false
	let slot4 = false
	let slot5 = false
	let slot6 = false
	pistol = true
	pistolPickup = true
	let shotgunPickup = false
	shotgun = false
	let chaingunPickup = false
	chaingun = false
	let plasmaGunPickup = false
	plasmaGun = false
	let rocketLauncherPickup = false
	rocketLauncher = false
	let bfgPickup = false
	bfg = false
	let shotgunSprite = document.querySelector('.shotgunSprite')
	let arm1 = document.querySelector('.arm1')
	let arm2 = document.querySelector('.arm2')
	let arm3 = document.querySelector('.arm3')
	let arm4 = document.querySelector('.arm4')
	let arm5 = document.querySelector('.arm5')
	let arm6 = document.querySelector('.arm6')
	let weaponCheck = function() {
		if(pistolPickup == true) {
			arm1.style.color = 'red'
		}
		if(shotgunPickup == true) {
			arm2.style.color = 'red'
		}
		if(chaingunPickup == true) {
			arm3.style.color = 'red'
		}
		if(plasmaGunPickup == true) {
			arm4.style.color = 'red'
		}
		if(rocketLauncherPickup == true) {
			arm5.style.color = 'red'
		}
		if(bfgPickup == true) {
			arm6.style.color = 'red'
		}
	}
	let pistolSound = function() {
        var audio = new Audio()
        audio.src = 'sounds/pistol.wav'
        audio.autoplay = true
    }
    let shotgun1Sound = function() {
        var audio = new Audio()
        audio.src = 'sounds/shotgun1.wav'
        audio.autoplay = true
    }
    let shotgun2Sound = function() {
        var audio = new Audio()
        audio.src = 'sounds/shotgun2.wav'
        audio.autoplay = true
    }
    let shotgun3Sound = function() {
        var audio = new Audio()
        audio.src = 'sounds/shotgun3.wav'
        audio.autoplay = true
    }
    let shotgun4Sound = function() {
        var audio = new Audio()
        audio.src = 'sounds/shotgun4.wav'
        audio.autoplay = true
    }
    let soldierInjured = function() {
        var audio = new Audio()
        audio.src = 'sounds/soldierinjured.wav'
        audio.autoplay = true
    }
    let soldier1Death = function() {
        var audio = new Audio()
        audio.src = 'sounds/soldierdeath.wav'
        audio.autoplay = true
        soldier1.status = false
    }
    let soldier2Death = function() {
        var audio = new Audio()
        audio.src = 'sounds/soldierdeath.wav'
        audio.autoplay = true
        soldier2.status = false
    }
	weaponCheck()
    let weapon1 = {
		damage: 25,
		ammo: 50,
		ammoLink: document.querySelector('.ammo'),
	}
	let shotgunObj = {
		damage: 50,
		ammo: 25,
		ammoLink: document.querySelector('.ammo'),
	}
	arm1.onclick = function() {
		if(pistolPickup == true && doomguy1.status == true) {
			pistol = true
			shotgun = false
			chaingun = false
			plasmaGun = false
			rocketLauncher = false
			bfg = false
			slot1 = true
			slot2 = false
			slot3 = false
			slot4 = false
			slot5 = false
			slot6 = false
			weaponCheck()
			weapon.style.display = 'block'
			weapon2.style.display = 'none'
			weapon1.ammoLink.innerHTML = weapon1.ammo
		}
	}
	arm2.onclick = function() {
		if(shotgunPickup == true && doomguy1.status == true) {
			pistol = false
			shotgun = true
			chaingun = false
			plasmaGun = false
			rocketLauncher = false
			bfg = false
			slot1 = false
			slot2 = true
			slot3 = false
			slot4 = false
			slot5 = false
			slot6 = false
			weaponCheck()
			weapon.style.display = 'none'
			weapon2.style.display = 'block'
			shotgunObj.ammoLink.innerHTML = shotgunObj.ammo
		}
	}	
	shotgunSprite.onclick = function() {
		if(doomguy1.status == true) {
			shotgunSprite.style.display = 'none'
			shotgunPickup = true
			pistol = false
			shotgun = true
			chaingun = false
			plasmaGun = false
			rocketLauncher = false
			bfg = false
			weaponCheck()
			weapon.style.display = 'none'
			weapon2.style.display = 'block'
			shotgunObj.ammoLink.innerHTML = shotgunObj.ammo
		}
	}
    loc1.onclick = function() {
    	loc1.style.display = 'none'
		doomguy.style.top = '80%'
		doomguy.style.left = '55%'
		setTimeout(loc1Transition, 1500)
		doomguy1.hpLink.innerHTML = doomguy1.hp
		doomguy1.armorLink.innerHTML = doomguy1.armor
		weapon1.ammoLink.innerHTML = weapon1.ammo
		if(doomguy1.hp < 80) {
			face.src = 'hud/faces/face2.png'
		}
		if(doomguy1.hp < 60) {
			face.src = 'hud/faces/face3.png'
		}
		if(doomguy1.hp < 40) {
			face.src = 'hud/faces/face4.png'
		}
		if(doomguy1.hp < 20) {
			face.src = 'hud/faces/face5.png'
		}
		
		let soldier1Attack = function() {
			pistolSound()
			soldier1.class.src = 'maps/1_hangar/demons/soldier2.png'
			hit.style.display = 'block'
			if(doomguy1.armor > 0) {
			    doomguy1.armor = doomguy1.armor - soldier1.damage
			    doomguy1.armorLink.innerHTML = doomguy1.armor
			}
			if(doomguy1.armor <= 0) {
				doomguy1.hp = doomguy1.hp - soldier1.damage * 2
				doomguy1.hpLink.innerHTML = doomguy1.hp
				if(doomguy1.hp < 80) {
			    	face.src = 'hud/faces/face2.png'
			    }
			    if(doomguy1.hp < 60) {
			    	face.src = 'hud/faces/face3.png'
			    }
			    if(doomguy1.hp < 40) {
			    	face.src = 'hud/faces/face4.png'
			    }
			    if(doomguy1.hp < 20) {
			    	face.src = 'hud/faces/face5.png'
			    }
			    if(doomguy1.hp <=0) {
			    	face.src = 'hud/faces/face6.png'
			    	clearInterval(s1att)
			    	clearInterval(s2att)
			    	doomguy1.status = false
			    	if(pistol == true) {
			    		weapon.style.display = 'none'
			    		pistol == false
			    	}
			    	if(shotgun == true) {
			    		weapon2.style.display = 'none'
			    		shotgun == false
			    	}
			    }
			}
			setTimeout(() => soldier1.class.src = 'maps/1_hangar/demons/soldier1.png', 150)
			setTimeout(() => hit.style.display = 'none', 150)
		}
		let soldier2Attack = function() {
			pistolSound()
			soldier2.class.src = 'maps/1_hangar/demons/soldier2.png'
			hit.style.display = 'block'
			if(doomguy1.armor > 0) {
			    doomguy1.armor = doomguy1.armor - soldier2.damage
			    doomguy1.armorLink.innerHTML = doomguy1.armor
			}
			if(doomguy1.armor <= 0) {
				doomguy1.hp = doomguy1.hp - soldier2.damage * 2
				doomguy1.hpLink.innerHTML = doomguy1.hp
				if(doomguy1.hp < 80) {
			    	face.src = 'hud/faces/face2.png'
			    }
			    if(doomguy1.hp < 60) {
			    	face.src = 'hud/faces/face3.png'
			    }
			    if(doomguy1.hp < 40) {
			    	face.src = 'hud/faces/face4.png'
			    }
			    if(doomguy1.hp < 20) {
			    	face.src = 'hud/faces/face5.png'
			    }
			    if(doomguy1.hp <= 0) {
			    	face.src = 'hud/faces/face6.png'
			    	clearInterval(s1att)
			    	clearInterval(s2att)
			    	doomguy1.status = false
			    	if(pistol == true) {
			    		weapon.style.display = 'none'
			    		pistol == false
			    	}
			    	if(shotgun == true) {
			    		weapon2.style.display = 'none'
			    		shotgun == false
			    	}
			    }
			}
			setTimeout(() => soldier2.class.src = 'maps/1_hangar/demons/soldier1.png', 150)
			setTimeout(() => hit.style.display = 'none', 150)
		}
		let s1att = setInterval(soldier1Attack, 3000)
		soldier1.class.onclick = function() {
			if(pistol == true && doomguy1.status == true) {
				if(weapon1.ammo > 0) {
					weapon1.ammo = weapon1.ammo - 1
				    weapon1.ammoLink.innerHTML = weapon1.ammo
					pistolSound()
				    soldier1.hp = soldier1.hp - weapon1.damage
				    setTimeout(() => weapon.src = 'hud/weapons/pistol/pistol2.png', 0)
				    setTimeout(() => weapon.src = 'hud/weapons/pistol/pistol3.png', 100)
				    setTimeout(() => weapon.src = 'hud/weapons/pistol/pistol4.png', 200)
				    setTimeout(() => weapon.src = 'hud/weapons/pistol/pistol1.png', 300)
				    if(soldier1.hp <= 0 && soldier1.status == true) {
					    clearInterval(s1att)
					    soldier1Death()
					    doomguy1.hp = doomguy1.hp + 25
					    doomguy1.hpLink.innerHTML = doomguy1.hp
					    face.src = 'hud/faces/winface.png'
					    setTimeout(() => face.src = 'hud/faces/face1.png', 5000)
					    setTimeout(() => soldier1.class.style.width = '55px', 0)
					    setTimeout(() => soldier1.class.src = 'maps/1_hangar/demons/soldier3.png', 0)
					    setTimeout(() => soldier1.class.style.top = '51.5%', 100)
					    setTimeout(() => soldier1.class.style.height = '85px', 100)
					    setTimeout(() => soldier1.class.style.width = '60px', 100)
					    setTimeout(() => soldier1.class.src = 'maps/1_hangar/demons/soldier4.png', 100)
					    setTimeout(() => soldier1.class.style.top = '53%', 200)
					    setTimeout(() => soldier1.class.style.height = '70px', 200)
					    setTimeout(() => soldier1.class.style.width = '75px', 200)
					    setTimeout(() => soldier1.class.src = 'maps/1_hangar/demons/soldier5.png', 200)
					    setTimeout(() => soldier1.class.style.top = '54.5%', 300)
					    setTimeout(() => soldier1.class.style.height = '45px', 300)
					    setTimeout(() => soldier1.class.style.width = '85px', 300)
					    setTimeout(() => soldier1.class.src = 'maps/1_hangar/demons/soldier6.png', 300)
					    setTimeout(() => soldier1.class.style.top = '56%', 400)
					    setTimeout(() => soldier1.class.style.height = '30px', 400)
					    setTimeout(() => soldier1.class.style.width = '90px', 400)
					    setTimeout(() => soldier1.class.src = 'maps/1_hangar/demons/soldier7.png', 400)
				    }
				}
				if(soldier1.hp > 0) {
					soldierInjured()
				}
			}
			if(shotgun == true && doomguy1.status == true) {
				if(shotgunObj.ammo > 0) {
					shotgunObj.ammo = shotgunObj.ammo - 1
				    shotgunObj.ammoLink.innerHTML = shotgunObj.ammo
					shotgun1Sound()
				    soldier1.hp = soldier1.hp - shotgunObj.damage
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun2.png', 0)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun3.png', 100)
				    setTimeout(() => shotgun2Sound(), 200)
				    setTimeout(() => weapon2.style.top = '62.5%', 200)
				    setTimeout(() => weapon2.style.left = '45.5%', 200)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun4.png', 200)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun5.png', 300)
				    setTimeout(() => shotgun3Sound(), 400)
				    setTimeout(() => weapon2.style.height = '200px', 400)
				    setTimeout(() => weapon2.style.width = '250px', 400)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun6.png', 400)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun7.png', 500)
				    setTimeout(() => shotgun4Sound(), 600)
				    setTimeout(() => weapon2.style.height = '200px', 600)
				    setTimeout(() => weapon2.style.width = '150px', 600)
				    setTimeout(() => weapon2.style.top = '63%', 600)
				    setTimeout(() => weapon2.style.left = '46%', 600)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun8.png', 600)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun9.png', 700)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun1.png', 800)
				    shotgun = false
				    setTimeout(() => shotgun = true, 800)
				    if(soldier1.hp <= 0 && soldier1.status == true) {
					    clearInterval(s1att)
					    soldier1Death()
					    doomguy1.hp = doomguy1.hp + 25
					    doomguy1.hpLink.innerHTML = doomguy1.hp
					    face.src = 'hud/faces/winface.png'
					    setTimeout(() => face.src = 'hud/faces/face1.png', 5000)
					    setTimeout(() => soldier1.class.style.width = '55px', 0)
					    setTimeout(() => soldier1.class.src = 'maps/1_hangar/demons/soldier3.png', 0)
					    setTimeout(() => soldier1.class.style.top = '51.5%', 100)
					    setTimeout(() => soldier1.class.style.height = '85px', 100)
					    setTimeout(() => soldier1.class.style.width = '60px', 100)
					    setTimeout(() => soldier1.class.src = 'maps/1_hangar/demons/soldier4.png', 100)
					    setTimeout(() => soldier1.class.style.top = '53%', 200)
					    setTimeout(() => soldier1.class.style.height = '70px', 200)
					    setTimeout(() => soldier1.class.style.width = '75px', 200)
					    setTimeout(() => soldier1.class.src = 'maps/1_hangar/demons/soldier5.png', 200)
					    setTimeout(() => soldier1.class.style.top = '54.5%', 300)
					    setTimeout(() => soldier1.class.style.height = '45px', 300)
					    setTimeout(() => soldier1.class.style.width = '85px', 300)
					    setTimeout(() => soldier1.class.src = 'maps/1_hangar/demons/soldier6.png', 300)
					    setTimeout(() => soldier1.class.style.top = '56%', 400)
					    setTimeout(() => soldier1.class.style.height = '30px', 400)
					    setTimeout(() => soldier1.class.style.width = '90px', 400)
					    setTimeout(() => soldier1.class.src = 'maps/1_hangar/demons/soldier7.png', 400)
				    }
				}
				if(soldier1.hp > 0) {
					soldierInjured()
				}
			}
		}
		
		let s2att
		setTimeout(() => s2att = setInterval(soldier2Attack, 3000), 1500)
		soldier2.class.onclick = function() {
			if(pistol == true  && doomguy1.status == true) {
				if(weapon1.ammo > 0) {
					weapon1.ammo = weapon1.ammo - 1
				    weapon1.ammoLink.innerHTML = weapon1.ammo
					pistolSound()
				    soldier2.hp = soldier2.hp - weapon1.damage
				    setTimeout(() => weapon.src = 'hud/weapons/pistol/pistol2.png', 0)
				    setTimeout(() => weapon.src = 'hud/weapons/pistol/pistol3.png', 100)
				    setTimeout(() => weapon.src = 'hud/weapons/pistol/pistol4.png', 200)
				    setTimeout(() => weapon.src = 'hud/weapons/pistol/pistol1.png', 300)
				    if(soldier2.hp <= 0 && soldier2.status == true) {
					    clearInterval(s2att)
					    soldier2Death()
					    doomguy1.hp = doomguy1.hp + 25
					    doomguy1.hpLink.innerHTML = doomguy1.hp
					    face.src = 'hud/faces/winface.png'
					    setTimeout(() => face.src = 'hud/faces/face1.png', 5000)
					    setTimeout(() => soldier2.class.style.width = '55px', 0)
					    setTimeout(() => soldier2.class.src = 'maps/1_hangar/demons/soldier3.png', 0)
					    setTimeout(() => soldier2.class.style.top = '51.5%', 100)
					    setTimeout(() => soldier2.class.style.height = '85px', 100)
					    setTimeout(() => soldier2.class.style.width = '60px', 100)
					    setTimeout(() => soldier2.class.src = 'maps/1_hangar/demons/soldier4.png', 100)
					    setTimeout(() => soldier2.class.style.top = '53%', 200)
					    setTimeout(() => soldier2.class.style.height = '70px', 200)
					    setTimeout(() => soldier2.class.style.width = '75px', 200)
					    setTimeout(() => soldier2.class.src = 'maps/1_hangar/demons/soldier5.png', 200)
					    setTimeout(() => soldier2.class.style.top = '54.5%', 300)
					    setTimeout(() => soldier2.class.style.height = '45px', 300)
					    setTimeout(() => soldier2.class.style.width = '85px', 300)
					    setTimeout(() => soldier2.class.src = 'maps/1_hangar/demons/soldier6.png', 300)
					    setTimeout(() => soldier2.class.style.top = '56%', 400)
					    setTimeout(() => soldier2.class.style.height = '30px', 400)
					    setTimeout(() => soldier2.class.style.width = '90px', 400)
					    setTimeout(() => soldier2.class.src = 'maps/1_hangar/demons/soldier7.png', 400)
				    }
				}
				if(soldier2.hp > 0) {
					soldierInjured()
				}
			}
			if(shotgun == true && doomguy1.status == true) {
				if(shotgunObj.ammo > 0) {
					shotgunObj.ammo = shotgunObj.ammo - 1
				    shotgunObj.ammoLink.innerHTML = shotgunObj.ammo
					shotgun1Sound()
				    soldier2.hp = soldier2.hp - shotgunObj.damage
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun2.png', 0)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun3.png', 100)
				    setTimeout(() => shotgun2Sound(), 200)
				    setTimeout(() => weapon2.style.top = '62.5%', 200)
				    setTimeout(() => weapon2.style.left = '45.5%', 200)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun4.png', 200)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun5.png', 300)
				    setTimeout(() => shotgun3Sound(), 400)
				    setTimeout(() => weapon2.style.height = '200px', 400)
				    setTimeout(() => weapon2.style.width = '250px', 400)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun6.png', 400)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun7.png', 500)
				    setTimeout(() => shotgun4Sound(), 600)
				    setTimeout(() => weapon2.style.height = '200px', 600)
				    setTimeout(() => weapon2.style.width = '150px', 600)
				    setTimeout(() => weapon2.style.top = '63%', 600)
				    setTimeout(() => weapon2.style.left = '46%', 600)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun8.png', 600)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun9.png', 700)
				    setTimeout(() => weapon2.src = 'hud/weapons/shotgun/shotgun1.png', 800)
				    setTimeout(() => shotgun = false, 10)
				    setTimeout(() => shotgun = true, 800)
				    if(soldier2.hp <= 0 && soldier2.status == true) {
					    clearInterval(s2att)
					    soldier2Death()
					    doomguy1.hp = doomguy1.hp + 25
					    doomguy1.hpLink.innerHTML = doomguy1.hp
					    face.src = 'hud/faces/winface.png'
					    setTimeout(() => face.src = 'hud/faces/face1.png', 5000)
					    setTimeout(() => soldier2.class.style.width = '55px', 0)
					    setTimeout(() => soldier2.class.src = 'maps/1_hangar/demons/soldier3.png', 0)
					    setTimeout(() => soldier2.class.style.top = '51.5%', 100)
					    setTimeout(() => soldier2.class.style.height = '85px', 100)
					    setTimeout(() => soldier2.class.style.width = '60px', 100)
					    setTimeout(() => soldier2.class.src = 'maps/1_hangar/demons/soldier4.png', 100)
					    setTimeout(() => soldier2.class.style.top = '53%', 200)
					    setTimeout(() => soldier2.class.style.height = '70px', 200)
					    setTimeout(() => soldier2.class.style.width = '75px', 200)
					    setTimeout(() => soldier2.class.src = 'maps/1_hangar/demons/soldier5.png', 200)
					    setTimeout(() => soldier2.class.style.top = '54.5%', 300)
					    setTimeout(() => soldier2.class.style.height = '45px', 300)
					    setTimeout(() => soldier2.class.style.width = '85px', 300)
					    setTimeout(() => soldier2.class.src = 'maps/1_hangar/demons/soldier6.png', 300)
					    setTimeout(() => soldier2.class.style.top = '56%', 400)
					    setTimeout(() => soldier2.class.style.height = '30px', 400)
					    setTimeout(() => soldier2.class.style.width = '90px', 400)
					    setTimeout(() => soldier2.class.src = 'maps/1_hangar/demons/soldier7.png', 400)
				    }
				}
				if(soldier2.hp > 0) {
					soldierInjured()
				}
			}
		}
	}
	loc2.onclick = function() {
		loc2.style.display = 'none'
		doomguy.style.top = '60%'
		doomguy.style.left = '42%'
		setTimeout(loc2Transition)
	}
}
