	
function Selectplist() {
    // ON selection of category this function will work

    removeAllOptions(document.prodinput.plist);
    addOption(document.prodinput.plist, "", "-- Select sub-category --", "");

    if (document.prodinput.Category.value == 'Carpentry') 
	{
        addOption(document.prodinput.plist, 'ALDROPS (NUCKLE, KUNDA)','ALDROPS (NUCKLE, KUNDA)');
		addOption(document.prodinput.plist, 'AUTO HINGES','AUTO HINGES');
		addOption(document.prodinput.plist, 'BALL CASTOR','BALL CASTOR');
		addOption(document.prodinput.plist, 'BRUSH HOLDER','BRUSH HOLDER');
		addOption(document.prodinput.plist, 'CUPBOARD LOCK','CUPBOARD LOCK');
		addOption(document.prodinput.plist, 'CURTAIN RING HOOK','CURTAIN RING HOOK');
		addOption(document.prodinput.plist, 'CURTAIN ROD','CURTAIN ROD');
		addOption(document.prodinput.plist, 'CURTAIN ROD BRACKETS','CURTAIN ROD BRACKETS');
		addOption(document.prodinput.plist, 'CURTAIN ROD HOLDER','CURTAIN ROD HOLDER');
		addOption(document.prodinput.plist, 'CURTAIN RODS','CURTAIN RODS');
		addOption(document.prodinput.plist, 'DOOR BOOT RUBBER','DOOR BOOT RUBBER');
		addOption(document.prodinput.plist, 'DOOR CHAIN & LOCK','DOOR CHAIN & LOCK');
		addOption(document.prodinput.plist, 'DOOR CLOSERS','DOOR CLOSERS');
		addOption(document.prodinput.plist, 'DOOR HANDLE','DOOR HANDLE');
		addOption(document.prodinput.plist, 'DOOR MAGNETIC CATCHER','DOOR MAGNETIC CATCHER');
		addOption(document.prodinput.plist, 'DOOR SILENCER','DOOR SILENCER');
		addOption(document.prodinput.plist, 'DOOR STOPPER','DOOR STOPPER');
		addOption(document.prodinput.plist, 'DOORS EYE','DOORS EYE');
		addOption(document.prodinput.plist, 'DRILL BITS - METAL','DRILL BITS - METAL');
		addOption(document.prodinput.plist, 'DRILL BITS - WOOD','DRILL BITS - WOOD');
		addOption(document.prodinput.plist, 'FIX CASTOR','FIX CASTOR');
		addOption(document.prodinput.plist, 'FLOOR SPRING','FLOOR SPRING');
		addOption(document.prodinput.plist, 'GAS SPRINGS','GAS SPRINGS');
		addOption(document.prodinput.plist, 'GATE HOOK','GATE HOOK');
		addOption(document.prodinput.plist, 'GLASS DOOR HANDLES','GLASS DOOR HANDLES');
		addOption(document.prodinput.plist, 'GLASS LOCK','GLASS LOCK');
		addOption(document.prodinput.plist, 'GLASS MIRROR','GLASS MIRROR');
		addOption(document.prodinput.plist, 'GLASS PATCH','GLASS PATCH');
		addOption(document.prodinput.plist, 'GLASS SLIDING RUNNER','GLASS SLIDING RUNNER');
		addOption(document.prodinput.plist, 'GLASS VACCUM','GLASS VACCUM');
		addOption(document.prodinput.plist, 'HANDLES - BRASS','HANDLES - BRASS');
		addOption(document.prodinput.plist, 'HEAVY DUTY NAILS','HEAVY DUTY NAILS');
		addOption(document.prodinput.plist, 'HINGES','HINGES');
		addOption(document.prodinput.plist, 'KHITI HANGER','KHITI HANGER');
		addOption(document.prodinput.plist, 'LATCH & HANDLES','LATCH & HANDLES');
		addOption(document.prodinput.plist, 'NAPKIN RING','NAPKIN RING');
		addOption(document.prodinput.plist, 'PLY CASTOR','PLY CASTOR');
		addOption(document.prodinput.plist, 'PLYWOOD SHEET','PLYWOOD SHEET');
		addOption(document.prodinput.plist, 'SHOWER HINGES','SHOWER HINGES');
		addOption(document.prodinput.plist, 'SLIDING DOOR BOLT','SLIDING DOOR BOLT');
		addOption(document.prodinput.plist, 'SMALL NAILS','SMALL NAILS');
		addOption(document.prodinput.plist, 'SOAP DISH','SOAP DISH');
		addOption(document.prodinput.plist, 'TOWEL RACK','TOWEL RACK');
		addOption(document.prodinput.plist, 'TOWEL ROD','TOWEL ROD');
		addOption(document.prodinput.plist, 'TOWER BOLT','TOWER BOLT');
		addOption(document.prodinput.plist, 'WHEEL CASTOR','WHEEL CASTOR');
		addOption(document.prodinput.plist, 'WINDOW STOPPER','WINDOW STOPPER');
		addOption(document.prodinput.plist, 'WOOD POLISH OIL','WOOD POLISH OIL');
		addOption(document.prodinput.plist, 'ZULA CHAIN','ZULA CHAIN');

    }
	
	
    if (document.prodinput.Category.value == 'Plumbing') 
	{	
		addOption(document.prodinput.plist, 'ANGLE COCK','ANGLE COCK');
		addOption(document.prodinput.plist, 'BALL COCK','BALL COCK');
		addOption(document.prodinput.plist, 'BALL VALVE','BALL VALVE');
		addOption(document.prodinput.plist, 'BALL VALVE - HANDLE','BALL VALVE - HANDLE');
		addOption(document.prodinput.plist, 'BEND WITH DOOR','BEND WITH DOOR');
		addOption(document.prodinput.plist, 'BIB COCK','BIB COCK');
		addOption(document.prodinput.plist, 'BIB COCK 2 IN 1','BIB COCK 2 IN 1');
		addOption(document.prodinput.plist, 'BUSHING','BUSHING');
		addOption(document.prodinput.plist, 'BUTTERFLY VALVE','BUTTERFLY VALVE');
		addOption(document.prodinput.plist, 'BUTTERFLY VALVE BOLT & NUTS','BUTTERFLY VALVE BOLT & NUTS');
		addOption(document.prodinput.plist, 'CAST IRON TAP','CAST IRON TAP');
		addOption(document.prodinput.plist, 'CHAMFERING TOOL','CHAMFERING TOOL');
		addOption(document.prodinput.plist, 'CONCEALED DIVERTER – SHOWER','CONCEALED DIVERTER – SHOWER');
		addOption(document.prodinput.plist, 'CONCEALED DIVERTER – SHOWER & SPOUT','CONCEALED DIVERTER – SHOWER & SPOUT');
		addOption(document.prodinput.plist, 'CONCEALED VALVE','CONCEALED VALVE');
		addOption(document.prodinput.plist, 'CONVERTER BUSHING','CONVERTER BUSHING');
		addOption(document.prodinput.plist, 'COUPLING','COUPLING');
		addOption(document.prodinput.plist, 'CROSS','CROSS');
		addOption(document.prodinput.plist, 'CROSS TEE','CROSS TEE');
		addOption(document.prodinput.plist, 'DOUBLE T WITH DOOR','DOUBLE T WITH DOOR');
		addOption(document.prodinput.plist, 'DRAIN WITH JALI','DRAIN WITH JALI');
		addOption(document.prodinput.plist, 'ELBOW','ELBOW');
		addOption(document.prodinput.plist, 'ELBOW 45°','ELBOW 45°');
		addOption(document.prodinput.plist, 'ELBOW 90°','ELBOW 90°');
		addOption(document.prodinput.plist, 'ELBOW 90° 3-WAY','ELBOW 90° 3-WAY');
		addOption(document.prodinput.plist, 'ELBOW 90° 4-WAY','ELBOW 90° 4-WAY');
		addOption(document.prodinput.plist, 'ELBOW HOLDER','ELBOW HOLDER');
		addOption(document.prodinput.plist, 'ELBOW WITH CLAMP','ELBOW WITH CLAMP');
		addOption(document.prodinput.plist, 'END CAP','END CAP');
		addOption(document.prodinput.plist, 'END PLUG THREADED','END PLUG THREADED');
		addOption(document.prodinput.plist, 'EXTENSION NIPPLE','EXTENSION NIPPLE');
		addOption(document.prodinput.plist, 'EXTENSION PIECES (CHROME PLATED)','EXTENSION PIECES (CHROME PLATED)');
		addOption(document.prodinput.plist, 'FAPT WASHER','FAPT WASHER');
		addOption(document.prodinput.plist, 'FEMALE ADAPTER','FEMALE ADAPTER');
		addOption(document.prodinput.plist, 'FEMALE ADAPTOR (BRASS THREADS)','FEMALE ADAPTOR (BRASS THREADS)');
		addOption(document.prodinput.plist, 'FEMALE ADAPTOR (CPVC THREADS)','FEMALE ADAPTOR (CPVC THREADS)');
		addOption(document.prodinput.plist, 'FEMALE BRASS UNION','FEMALE BRASS UNION');
		addOption(document.prodinput.plist, 'FEMALE EXT. BRASS ELBOW 90°','FEMALE EXT. BRASS ELBOW 90°');
		addOption(document.prodinput.plist, 'FLANGE - BLIND','FLANGE - BLIND');
		addOption(document.prodinput.plist, 'FLANGE - END CAP CLOSED (WITH RUBBER GASKET)','FLANGE - END CAP CLOSED (WITH RUBBER GASKET)');
		addOption(document.prodinput.plist, 'FLANGE - END CAP OPEN (WITH RUBBER GASKET)','FLANGE - END CAP OPEN (WITH RUBBER GASKET)');
		addOption(document.prodinput.plist, 'FLANGE - SOCKET','FLANGE - SOCKET');
		addOption(document.prodinput.plist, 'FLANGE - SPIGOT','FLANGE - SPIGOT');
		addOption(document.prodinput.plist, 'FLANGE RING - SOC','FLANGE RING - SOC');
		addOption(document.prodinput.plist, 'FLUSH TANK BALL COCK SET','FLUSH TANK BALL COCK SET');
		addOption(document.prodinput.plist, 'FLUSH TANK HANDLE (INSIDE)','FLUSH TANK HANDLE (INSIDE)');
		addOption(document.prodinput.plist, 'GATE VALVE','GATE VALVE');
		addOption(document.prodinput.plist, 'HALF ROUND PIPES','HALF ROUND PIPES');
		addOption(document.prodinput.plist, 'HEX NIPPLE','HEX NIPPLE');
		addOption(document.prodinput.plist, 'JOINT BRACKET','JOINT BRACKET');
		addOption(document.prodinput.plist, 'KITCHEN MIXER ADAPTOR','KITCHEN MIXER ADAPTOR');
		addOption(document.prodinput.plist, 'LEAKAGE REPAIR WATERPROOF TAPE','LEAKAGE REPAIR WATERPROOF TAPE');
		addOption(document.prodinput.plist, 'LONG RADIUS BEND','LONG RADIUS BEND');
		addOption(document.prodinput.plist, 'LUBRICANT','LUBRICANT');
		addOption(document.prodinput.plist, 'MALE ADAPTOR (BRASS THREADS)','MALE ADAPTOR (BRASS THREADS)');
		addOption(document.prodinput.plist, 'MALE ADAPTOR (CPVC THREADS)','MALE ADAPTOR (CPVC THREADS)');
		addOption(document.prodinput.plist, 'METAL CLAMP','METAL CLAMP');
		addOption(document.prodinput.plist, 'METAL STRAP','METAL STRAP');
		addOption(document.prodinput.plist, 'MULTI FLOOR TRAP','MULTI FLOOR TRAP');
		addOption(document.prodinput.plist, 'NIPPLE','NIPPLE');
		addOption(document.prodinput.plist, 'OLET','OLET');
		addOption(document.prodinput.plist, 'P, U, S OR J-SHAPED TRAP','P, U, S OR J-SHAPED TRAP');
		addOption(document.prodinput.plist, 'PILLAR COCK','PILLAR COCK');
		addOption(document.prodinput.plist, 'PIPE - ALUMINIUM','PIPE - ALUMINIUM');
		addOption(document.prodinput.plist, 'PIPE - CPVC','PIPE - CPVC');
		addOption(document.prodinput.plist, 'PIPE - GI','PIPE - GI');
		addOption(document.prodinput.plist, 'PIPE - MS','PIPE - MS');
		addOption(document.prodinput.plist, 'PIPE - PVC','PIPE - PVC');
		addOption(document.prodinput.plist, 'PIPE - RUBBER','PIPE - RUBBER');
		addOption(document.prodinput.plist, 'PIPE - STEEL','PIPE - STEEL');
		addOption(document.prodinput.plist, 'PIPE - UPVC','PIPE - UPVC');
		addOption(document.prodinput.plist, 'PIPE CLIP [WITH BRACKET]','PIPE CLIP [WITH BRACKET]');
		addOption(document.prodinput.plist, 'PIPE DOOR CAP','PIPE DOOR CAP');
		addOption(document.prodinput.plist, 'PLASTIC CLIP/CLAMP','PLASTIC CLIP/CLAMP');
		addOption(document.prodinput.plist, 'PLASTIC STRAP','PLASTIC STRAP');
		addOption(document.prodinput.plist, 'PLUG','PLUG');
		addOption(document.prodinput.plist, 'POWDER COATED METAL CLAMP','POWDER COATED METAL CLAMP');
		addOption(document.prodinput.plist, 'PRIMER','PRIMER');
		addOption(document.prodinput.plist, 'PVC CONNECTION','PVC CONNECTION');
		addOption(document.prodinput.plist, 'PVC WATER TAP HOSE CONNECTOR','PVC WATER TAP HOSE CONNECTOR');
		addOption(document.prodinput.plist, 'RATCHET CUTTER','RATCHET CUTTER');
		addOption(document.prodinput.plist, 'REDUCER','REDUCER');
		addOption(document.prodinput.plist, 'REDUCER BUSHING','REDUCER BUSHING');
		addOption(document.prodinput.plist, 'REDUCER COUPLER','REDUCER COUPLER');
		addOption(document.prodinput.plist, 'REDUCER COUPLING','REDUCER COUPLING');
		addOption(document.prodinput.plist, 'REDUCER ELBOW 90°','REDUCER ELBOW 90°');
		addOption(document.prodinput.plist, 'REDUCER TEE','REDUCER TEE');
		addOption(document.prodinput.plist, 'REDUCING FEMALE ADAPTOR','REDUCING FEMALE ADAPTOR');
		addOption(document.prodinput.plist, 'REDUCING MALE ADAPTOR','REDUCING MALE ADAPTOR');
		addOption(document.prodinput.plist, 'REDUCING T','REDUCING T');
		addOption(document.prodinput.plist, 'REDUCING Y','REDUCING Y');
		addOption(document.prodinput.plist, 'REDUCING Y WITH DOOR','REDUCING Y WITH DOOR');
		addOption(document.prodinput.plist, 'REPAIR COUPLER','REPAIR COUPLER');
		addOption(document.prodinput.plist, 'ROUND JALI','ROUND JALI');
		addOption(document.prodinput.plist, 'RUBBER DOOR GASKET','RUBBER DOOR GASKET');
		addOption(document.prodinput.plist, 'RUBBER RING','RUBBER RING');
		addOption(document.prodinput.plist, 'RUBBER WASHER - UNION O-RING','RUBBER WASHER - UNION O-RING');
		addOption(document.prodinput.plist, 'RUNNING OUTLET','RUNNING OUTLET');
		addOption(document.prodinput.plist, 'SERVICE SADDLE','SERVICE SADDLE');
		addOption(document.prodinput.plist, 'SHORT BEND','SHORT BEND');
		addOption(document.prodinput.plist, 'SHORT STOP END','SHORT STOP END');
		addOption(document.prodinput.plist, 'SHOWER ROSE BRASS','SHOWER ROSE BRASS');
		addOption(document.prodinput.plist, 'SILICON WATER TUBE','SILICON WATER TUBE');
		addOption(document.prodinput.plist, 'SINGLE T WITH DOOR','SINGLE T WITH DOOR');
		addOption(document.prodinput.plist, 'SINGLE Y WITH DOOR','SINGLE Y WITH DOOR');
		addOption(document.prodinput.plist, 'SIPHON SET','SIPHON SET');
		addOption(document.prodinput.plist, 'SOLVENT CEMENT','SOLVENT CEMENT');
		addOption(document.prodinput.plist, 'SS CLAMP','SS CLAMP');
		addOption(document.prodinput.plist, 'STEP OVER BEND','STEP OVER BEND');
		addOption(document.prodinput.plist, 'STOP COCK','STOP COCK');
		addOption(document.prodinput.plist, 'STOP END OUTLET','STOP END OUTLET');
		addOption(document.prodinput.plist, 'STRIP CONNECTOR','STRIP CONNECTOR');
		addOption(document.prodinput.plist, 'SUPPORT BRACKET','SUPPORT BRACKET');
		addOption(document.prodinput.plist, 'SWEEP BEND - SOCKET AT BOTH SIDES','SWEEP BEND - SOCKET AT BOTH SIDES');
		addOption(document.prodinput.plist, 'TANK ADAPTOR (SOCKET TYPE)','TANK ADAPTOR (SOCKET TYPE)');
		addOption(document.prodinput.plist, 'TANK ADAPTOR (SPIGOT TYPE)','TANK ADAPTOR (SPIGOT TYPE)');
		addOption(document.prodinput.plist, 'TANK NIPPLE','TANK NIPPLE');
		addOption(document.prodinput.plist, 'TANK NIPPLE WASHER','TANK NIPPLE WASHER');
		addOption(document.prodinput.plist, 'TEE','TEE');
		addOption(document.prodinput.plist, 'TEE 90°','TEE 90°');
		addOption(document.prodinput.plist, 'TEE HOLDER','TEE HOLDER');
		addOption(document.prodinput.plist, 'THREADED END PLUG','THREADED END PLUG');
		addOption(document.prodinput.plist, 'TOOLKIT BOX','TOOLKIT BOX');
		addOption(document.prodinput.plist, 'TRANSITION BUSHING','TRANSITION BUSHING');
		addOption(document.prodinput.plist, 'TRANSITION COUPLING','TRANSITION COUPLING');
		addOption(document.prodinput.plist, 'UNION','UNION');
		addOption(document.prodinput.plist, 'VENT COWL','VENT COWL');
		addOption(document.prodinput.plist, 'VENT COWL WITH JALI','VENT COWL WITH JALI');
		addOption(document.prodinput.plist, 'WALL MIXTURE - ADAPTER','WALL MIXTURE - ADAPTER');
		addOption(document.prodinput.plist, 'WALL MIXTURE - BEND','WALL MIXTURE - BEND');
		addOption(document.prodinput.plist, 'WALL MIXTURE - NUTS','WALL MIXTURE - NUTS');
		addOption(document.prodinput.plist, 'WALL MIXTURE SET','WALL MIXTURE SET');
		addOption(document.prodinput.plist, 'WASH BASIN WASTE COUPLING','WASH BASIN WASTE COUPLING');
		addOption(document.prodinput.plist, 'WASTE PIPE (URINALS)','WASTE PIPE (URINALS)');
		addOption(document.prodinput.plist, 'WASTE PIPE (WASHBASIN & SINK)','WASTE PIPE (WASHBASIN & SINK)');
}

    if (document.prodinput.Category.value == 'Geyser') 
	{
		addOption(document.prodinput.plist, 'ALUMINIUM TAPE','ALUMINIUM TAPE');
		addOption(document.prodinput.plist, 'ANODE RODS','ANODE RODS');
		addOption(document.prodinput.plist, 'BATTERY BOX','BATTERY BOX');
		addOption(document.prodinput.plist, 'BAYONET FUSE','BAYONET FUSE');
		addOption(document.prodinput.plist, 'BRACKET (BATTERY BOX)','BRACKET (BATTERY BOX)');
		addOption(document.prodinput.plist, 'BRACKET (BURNER)','BRACKET (BURNER)');
		addOption(document.prodinput.plist, 'BRACKET (OUT WATER)','BRACKET (OUT WATER)');
		addOption(document.prodinput.plist, 'BRACKET (PULSE)','BRACKET (PULSE)');
		addOption(document.prodinput.plist, 'BRACKET (VALVE)','BRACKET (VALVE)');
		addOption(document.prodinput.plist, 'BURNER','BURNER');
		addOption(document.prodinput.plist, 'BURNER DOOR INSULATION','BURNER DOOR INSULATION');
		addOption(document.prodinput.plist, 'BURNER DOOR SILICON GASKET','BURNER DOOR SILICON GASKET');
		addOption(document.prodinput.plist, 'BURNER STOPPER','BURNER STOPPER');
		addOption(document.prodinput.plist, 'CLIP SENSOR','CLIP SENSOR');
		addOption(document.prodinput.plist, 'COLD AND HOT WATER CONTROL','COLD AND HOT WATER CONTROL');
		addOption(document.prodinput.plist, 'CONCENTRIC ADAPTOR','CONCENTRIC ADAPTOR');
		addOption(document.prodinput.plist, 'CONDENSATE TRAP','CONDENSATE TRAP');
		addOption(document.prodinput.plist, 'CONNECTING LINES/WIRES','CONNECTING LINES/WIRES');
		addOption(document.prodinput.plist, 'CONNECTIONS BOARD','CONNECTIONS BOARD');
		addOption(document.prodinput.plist, 'CONTROL (GAS VALVE)','CONTROL (GAS VALVE)');
		addOption(document.prodinput.plist, 'CONTROL KNOB','CONTROL KNOB');
		addOption(document.prodinput.plist, 'COVER REPAIR SET','COVER REPAIR SET');
		addOption(document.prodinput.plist, 'DISPLAY','DISPLAY');
		addOption(document.prodinput.plist, 'DISPLAY BOARD','DISPLAY BOARD');
		addOption(document.prodinput.plist, 'FAN','FAN');
		addOption(document.prodinput.plist, 'FAN GASKET','FAN GASKET');
		addOption(document.prodinput.plist, 'FILTER (WATER)','FILTER (WATER)');
		addOption(document.prodinput.plist, 'FLANGE','FLANGE');
		addOption(document.prodinput.plist, 'FLANGE GASKET','FLANGE GASKET');
		addOption(document.prodinput.plist, 'FLANGE SCREW','FLANGE SCREW');
		addOption(document.prodinput.plist, 'FOAM','FOAM');
		addOption(document.prodinput.plist, 'FUSE','FUSE');
		addOption(document.prodinput.plist, 'GAS INLET/BURNER DOOR ASSEMBLY','GAS INLET/BURNER DOOR ASSEMBLY');
		addOption(document.prodinput.plist, 'GAS VALVE','GAS VALVE');
		addOption(document.prodinput.plist, 'GASKET','GASKET');
		addOption(document.prodinput.plist, 'GRAUNDIG TERMINAL','GRAUNDIG TERMINAL');
		addOption(document.prodinput.plist, 'HEAT EXCHANGER','HEAT EXCHANGER');
		addOption(document.prodinput.plist, 'HEAT EXCHANGER','HEAT EXCHANGER');
		addOption(document.prodinput.plist, 'HEATING ELEMENT','HEATING ELEMENT');
		addOption(document.prodinput.plist, 'HEATING ELEMENTS','HEATING ELEMENTS');
		addOption(document.prodinput.plist, 'HEXAGONAL NUT','HEXAGONAL NUT');
		addOption(document.prodinput.plist, 'IGNITER','IGNITER');
		addOption(document.prodinput.plist, 'IGNITER SPARK ','IGNITER SPARK ');
		addOption(document.prodinput.plist, 'IGNITION CABLE','IGNITION CABLE');
		addOption(document.prodinput.plist, 'IGNITION ELECTRODE','IGNITION ELECTRODE');
		addOption(document.prodinput.plist, 'IGNITION ELECTRODE GASKET','IGNITION ELECTRODE GASKET');
		addOption(document.prodinput.plist, 'IGNITION LEAD','IGNITION LEAD');
		addOption(document.prodinput.plist, 'IGNITION UNIT','IGNITION UNIT');
		addOption(document.prodinput.plist, 'INJECTOR (LPG)','INJECTOR (LPG)');
		addOption(document.prodinput.plist, 'INJECTOR (SPUD)','INJECTOR (SPUD)');
		addOption(document.prodinput.plist, 'INJECTOR PILOT','INJECTOR PILOT');
		addOption(document.prodinput.plist, 'KIT (ELECTRONIC SENSOR)','KIT (ELECTRONIC SENSOR)');
		addOption(document.prodinput.plist, 'MAIN PCB','MAIN PCB');
		addOption(document.prodinput.plist, 'MANUAL AIR VENT','MANUAL AIR VENT');
		addOption(document.prodinput.plist, 'MIXER (WATER CONTROL)','MIXER (WATER CONTROL)');
		addOption(document.prodinput.plist, 'NON RETURN VALVE','NON RETURN VALVE');
		addOption(document.prodinput.plist, 'NUT (GLAND)','NUT (GLAND)');
		addOption(document.prodinput.plist, 'NUT (THERMOCOUPLE)','NUT (THERMOCOUPLE)');
		addOption(document.prodinput.plist, 'NUT (OLIVE PILOT)','NUT (OLIVE PILOT)');
		addOption(document.prodinput.plist, 'O’RINGS','O’RINGS');
		addOption(document.prodinput.plist, 'OLIVE (PILOT TUBE)','OLIVE (PILOT TUBE)');
		addOption(document.prodinput.plist, 'PIEZO','PIEZO');
		addOption(document.prodinput.plist, 'PILOT ASSEMBLY','PILOT ASSEMBLY');
		addOption(document.prodinput.plist, 'PILOT BURNER','PILOT BURNER');
		addOption(document.prodinput.plist, 'PLASTIC COVER','PLASTIC COVER');
		addOption(document.prodinput.plist, 'REGULATOR','REGULATOR');
		addOption(document.prodinput.plist, 'SENSE PROBE','SENSE PROBE');
		addOption(document.prodinput.plist, 'SENSE PROBE GASKET','SENSE PROBE GASKET');
		addOption(document.prodinput.plist, 'SENSOR (ASSEMBLY)','SENSOR (ASSEMBLY)');
		addOption(document.prodinput.plist, 'SIGNAL LAMP','SIGNAL LAMP');
		addOption(document.prodinput.plist, 'SMOKE TUBE','SMOKE TUBE');
		addOption(document.prodinput.plist, 'SPARK GENERATOR','SPARK GENERATOR');
		addOption(document.prodinput.plist, 'SPRING (REGULATOR)','SPRING (REGULATOR)');
		addOption(document.prodinput.plist, 'SWITCH (110 DEG) OVER HEAT','SWITCH (110 DEG) OVER HEAT');
		addOption(document.prodinput.plist, 'SWITCH (OVER TEMP CUTOUT)','SWITCH (OVER TEMP CUTOUT)');
		addOption(document.prodinput.plist, 'TEMPERATURE SENSOR','TEMPERATURE SENSOR');
		addOption(document.prodinput.plist, 'THERMISTER','THERMISTER');
		addOption(document.prodinput.plist, 'THERMOCOUPLE','THERMOCOUPLE');
		addOption(document.prodinput.plist, 'THERMOCOUPLE (2 WIRE)','THERMOCOUPLE (2 WIRE)');
		addOption(document.prodinput.plist, 'THERMOMETER','THERMOMETER');
		addOption(document.prodinput.plist, 'THERMOSTAT','THERMOSTAT');
		addOption(document.prodinput.plist, 'UNION SET','UNION SET');
		addOption(document.prodinput.plist, 'VALVE (BY-PASS)','VALVE (BY-PASS)');
		addOption(document.prodinput.plist, 'VALVE (MAIN SOLENOID)','VALVE (MAIN SOLENOID)');
		addOption(document.prodinput.plist, 'VALVE (PILOT SOLENOID)','VALVE (PILOT SOLENOID)');
		addOption(document.prodinput.plist, 'VALVE (PRESSURE RELIEF )','VALVE (PRESSURE RELIEF )');
		addOption(document.prodinput.plist, 'VALVE (SAFETY)','VALVE (SAFETY)');
		addOption(document.prodinput.plist, 'VALVE (TEMPERING)','VALVE (TEMPERING)');
		addOption(document.prodinput.plist, 'VALVE NOZZLE','VALVE NOZZLE');
		addOption(document.prodinput.plist, 'VORTEX FLOW SENSOR','VORTEX FLOW SENSOR');
		addOption(document.prodinput.plist, 'WASHER (CUP) BRASS','WASHER (CUP) BRASS');
		addOption(document.prodinput.plist, 'WASHERS','WASHERS');
	}
	
	
    if (document.prodinput.Category.value == 'Generic') 
	{
		addOption(document.prodinput.plist, 'BLADE/CUTTER','BLADE/CUTTER');
		addOption(document.prodinput.plist, 'BOLT','BOLT');
		addOption(document.prodinput.plist, 'CLEANING BRUSH','CLEANING BRUSH');
		addOption(document.prodinput.plist, 'M-SEAL','M-SEAL');
		addOption(document.prodinput.plist, 'NUT','NUT');
		addOption(document.prodinput.plist, 'NAILS - SMALL','NAILS - SMALL');
		addOption(document.prodinput.plist, 'NAILS - LARGE','NAILS - LARGE');
		addOption(document.prodinput.plist, 'OTHER ADHESIVES','OTHER ADHESIVES');
		addOption(document.prodinput.plist, 'PADLOCK','PADLOCK');
		addOption(document.prodinput.plist, 'POLISH/SAND PAPER','POLISH/SAND PAPER');
		addOption(document.prodinput.plist, 'SCREWDRIVER','SCREWDRIVER');
		addOption(document.prodinput.plist, 'SCREW','SCREW');
		addOption(document.prodinput.plist, 'SUPER GLUE','SUPER GLUE');
		addOption(document.prodinput.plist, 'TEFLON TAPE','TEFLON TAPE');
		addOption(document.prodinput.plist, 'WALL PLUG/GITTI - PLASTIC','WALL PLUG/GITTI - PLASTIC');
		addOption(document.prodinput.plist, 'WALL PLUG/GITTI - WOODEN','WALL PLUG/GITTI - WOODEN');
		addOption(document.prodinput.plist, 'WD-40','WD-40');
		addOption(document.prodinput.plist, 'ZIP TIE','ZIP TIE');
	}
	
	if (document.prodinput.Category.value == 'Electrical') 
	{
		addOption(document.prodinput.plist,'2 pin Socket','2 pin Socket');
		addOption(document.prodinput.plist,'2, 3, 4 & 6 Multicore Cable','2, 3, 4 & 6 Multicore Cable');
		addOption(document.prodinput.plist,'2+3 pin Socket','2+3 pin Socket');
		addOption(document.prodinput.plist,'Adaptor','Adaptor');
		addOption(document.prodinput.plist,'Air Blower','Air Blower');
		addOption(document.prodinput.plist,'Angle Holder','Angle Holder');
		addOption(document.prodinput.plist,'Batten Holder','Batten Holder');
		addOption(document.prodinput.plist,'Blade','Blade');
		addOption(document.prodinput.plist,'BLDC Fans','BLDC Fans');
		addOption(document.prodinput.plist,'Brass Cup Washer','Brass Cup Washer');
		addOption(document.prodinput.plist,'Buzzer','Buzzer');
		addOption(document.prodinput.plist,'Cable Glands','Cable Glands');
		addOption(document.prodinput.plist,'Cable Tie','Cable Tie');
		addOption(document.prodinput.plist,'Capacitor','Capacitor');
		addOption(document.prodinput.plist,'Ceiling Fans','Ceiling Fans');
		addOption(document.prodinput.plist,'Ceiling Rose','Ceiling Rose');
		addOption(document.prodinput.plist,'CFL','CFL');
		addOption(document.prodinput.plist,'CFL Holder','CFL Holder');
		addOption(document.prodinput.plist,'Changeover Switch','Changeover Switch');
		addOption(document.prodinput.plist,'Coaxial Cable','Coaxial Cable');
		addOption(document.prodinput.plist,'Combi Socket','Combi Socket');
		addOption(document.prodinput.plist,'Commercial LED Lights','Commercial LED Lights');
		addOption(document.prodinput.plist,'Contactor','Contactor');
		addOption(document.prodinput.plist,'Converting Holder','Converting Holder');
		addOption(document.prodinput.plist,'Converting Plugs','Converting Plugs');
		addOption(document.prodinput.plist,'Copper Ballasts','Copper Ballasts');
		addOption(document.prodinput.plist,'Decorative Lights String','Decorative Lights String');
		addOption(document.prodinput.plist,'Desk Lamp Light','Desk Lamp Light');
		addOption(document.prodinput.plist,'Ding-Dong Bell','Ding-Dong Bell');
		addOption(document.prodinput.plist,'Drill Bits','Drill Bits');
		addOption(document.prodinput.plist,'Drill Machine','Drill Machine');
		addOption(document.prodinput.plist,'Dry Iron','Dry Iron');
		addOption(document.prodinput.plist,'Earthing Accesories','Earthing Accesories');
		addOption(document.prodinput.plist,'Electric Clamp','Electric Clamp');
		addOption(document.prodinput.plist,'Electromagnetic Ballasts','Electromagnetic Ballasts');
		addOption(document.prodinput.plist,'Electronic Ballasts','Electronic Ballasts');
		addOption(document.prodinput.plist,'Exhaust Fans','Exhaust Fans');
		addOption(document.prodinput.plist,'Fan Down Rod','Fan Down Rod');
		addOption(document.prodinput.plist,'Fan Regulator & Dimmer','Fan Regulator & Dimmer');
		addOption(document.prodinput.plist,'Fastner','Fastner');
		addOption(document.prodinput.plist,'Ferrule Ring/Cap','Ferrule Ring/Cap');
		addOption(document.prodinput.plist,'Flexible Conduits','Flexible Conduits');
		addOption(document.prodinput.plist,'Flood Light','Flood Light');
		addOption(document.prodinput.plist,'Geyser','Geyser');
		addOption(document.prodinput.plist,'Glass Fuse','Glass Fuse');
		addOption(document.prodinput.plist,'Halogen & HID Lamps Holder','Halogen & HID Lamps Holder');
		addOption(document.prodinput.plist,'Halogen Lamp','Halogen Lamp');
		addOption(document.prodinput.plist,'Hammer','Hammer');
		addOption(document.prodinput.plist,'Hand Blender','Hand Blender');
		addOption(document.prodinput.plist,'HID Ballast','HID Ballast');
		addOption(document.prodinput.plist,'House Wire','House Wire');
		addOption(document.prodinput.plist,'HRC Fuse','HRC Fuse');
		addOption(document.prodinput.plist,'Ignitor','Ignitor');
		addOption(document.prodinput.plist,'Indicator','Indicator');
		addOption(document.prodinput.plist,'Insulation Tape','Insulation Tape');
		addOption(document.prodinput.plist,'Intermediate switch','Intermediate switch');
		addOption(document.prodinput.plist,'Juicer Mixer Grinder','Juicer Mixer Grinder');
		addOption(document.prodinput.plist,'LAN cable','LAN cable');
		addOption(document.prodinput.plist,'LED Battens','LED Battens');
		addOption(document.prodinput.plist,'LED Bulbs','LED Bulbs');
		addOption(document.prodinput.plist,'LED Downlights','LED Downlights');
		addOption(document.prodinput.plist,'LED Driver','LED Driver');
		addOption(document.prodinput.plist,'LED GU10 or MR16','LED GU10 or MR16');
		addOption(document.prodinput.plist,'LED Panels','LED Panels');
		addOption(document.prodinput.plist,'LED Profile Patti','LED Profile Patti');
		addOption(document.prodinput.plist,'LED Spotlight','LED Spotlight');
		addOption(document.prodinput.plist,'LED Strips','LED Strips');
		addOption(document.prodinput.plist,'LED Surface Light','LED Surface Light');
		addOption(document.prodinput.plist,'Luxury Fans','Luxury Fans');
		addOption(document.prodinput.plist,'Main switch/MCB','Main switch/MCB');
		addOption(document.prodinput.plist,'MCB Distribution Box','MCB Distribution Box');
		addOption(document.prodinput.plist,'MCCB','MCCB');
		addOption(document.prodinput.plist,'Mixer Grinder','Mixer Grinder');
		addOption(document.prodinput.plist,'Module Plate','Module Plate');
		addOption(document.prodinput.plist,'Motor Starter','Motor Starter');
		addOption(document.prodinput.plist,'Multi Meter','Multi Meter');
		addOption(document.prodinput.plist,'Multiplug ','Multiplug ');
		addOption(document.prodinput.plist,'Multiplug extension board','Multiplug extension board');
		addOption(document.prodinput.plist,'Musical Bell','Musical Bell');
		addOption(document.prodinput.plist,'Nut Bolts','Nut Bolts');
		addOption(document.prodinput.plist,'One-way switch','One-way switch');
		addOption(document.prodinput.plist,'Pedestal Fans','Pedestal Fans');
		addOption(document.prodinput.plist,'Pendent Holder','Pendent Holder');
		addOption(document.prodinput.plist,'Plier','Plier');
		addOption(document.prodinput.plist,'Plug Tops','Plug Tops');
		addOption(document.prodinput.plist,'Power Strip','Power Strip');
		addOption(document.prodinput.plist,'Pvc cable Clips','Pvc cable Clips');
		addOption(document.prodinput.plist,'PVC Casing-Capping','PVC Casing-Capping');
		addOption(document.prodinput.plist,'PVC clip','PVC clip');
		addOption(document.prodinput.plist,'Pvc Gitti/Wall Plug','Pvc Gitti/Wall Plug');
		addOption(document.prodinput.plist,'RCCB','RCCB');
		addOption(document.prodinput.plist,'Relay','Relay');
		addOption(document.prodinput.plist,'RJ11 Sockets','RJ11 Sockets');
		addOption(document.prodinput.plist,'RJ45 Sockets','RJ45 Sockets');
		addOption(document.prodinput.plist,'Room Heater','Room Heater');
		addOption(document.prodinput.plist,'Screw Driver','Screw Driver');
		addOption(document.prodinput.plist,'Screws','Screws');
		addOption(document.prodinput.plist,'Shield Wire','Shield Wire');
		addOption(document.prodinput.plist,'Single Core Wire','Single Core Wire');
		addOption(document.prodinput.plist,'Socket outlet/plug','Socket outlet/plug');
		addOption(document.prodinput.plist,'Spanner','Spanner');
		addOption(document.prodinput.plist,'Speaker Wire','Speaker Wire');
		addOption(document.prodinput.plist,'Steam Iron','Steam Iron');
		addOption(document.prodinput.plist,'Submersible Cable','Submersible Cable');
		addOption(document.prodinput.plist,'Surface Box','Surface Box');
		addOption(document.prodinput.plist,'Suspended LED Lights','Suspended LED Lights');
		addOption(document.prodinput.plist,'T-5 Fitting 2 Feet','T-5 Fitting 2 Feet');
		addOption(document.prodinput.plist,'T-5 Fitting 4 Feet','T-5 Fitting 4 Feet');
		addOption(document.prodinput.plist,'T-8 Fitting 4 Feet','T-8 Fitting 4 Feet');
		addOption(document.prodinput.plist,'Table & Personal Fans','Table & Personal Fans');
		addOption(document.prodinput.plist,'Telephone Wire','Telephone Wire');
		addOption(document.prodinput.plist,'Tester','Tester');
		addOption(document.prodinput.plist,'Thimble/Lugs ','Thimble/Lugs ');
		addOption(document.prodinput.plist,'Tool Kits','Tool Kits');
		addOption(document.prodinput.plist,'Tower Fans','Tower Fans');
		addOption(document.prodinput.plist,'Transformer','Transformer');
		addOption(document.prodinput.plist,'Tube Light Holder','Tube Light Holder');
		addOption(document.prodinput.plist,'Tubelights','Tubelights');
		addOption(document.prodinput.plist,'Tv Sockets','Tv Sockets');
		addOption(document.prodinput.plist,'Twin Twisted Wire','Twin Twisted Wire');
		addOption(document.prodinput.plist,'Two-way switch','Two-way switch');
		addOption(document.prodinput.plist,'UV light','UV light');
		addOption(document.prodinput.plist,'Wall Fans','Wall Fans');
		addOption(document.prodinput.plist,'Wire Clip','Wire Clip');
		addOption(document.prodinput.plist,'Wire Nuts','Wire Nuts');
		addOption(document.prodinput.plist,'Wireles Bell','Wireles Bell');
		addOption(document.prodinput.plist,'Wrench','Wrench');
	}


	if (document.prodinput.Category.value == 'Waterpurifier') 
	{
		addOption(document.prodinput.plist, 'Adaptor','Adaptor');
		addOption(document.prodinput.plist, 'Alkaline Water Filter','Alkaline Water Filter');
		addOption(document.prodinput.plist, 'carbon block','carbon block');
		addOption(document.prodinput.plist, 'Carbon Filter','Carbon Filter');
		addOption(document.prodinput.plist, 'Elastic hose/Pipe','Elastic hose/Pipe');
		addOption(document.prodinput.plist, 'Flow restrictor','Flow restrictor');
		addOption(document.prodinput.plist, 'Flush kit','Flush kit');
		addOption(document.prodinput.plist, 'High pressure switch','High pressure switch');
		addOption(document.prodinput.plist, 'In-line cartridge','In-line cartridge');
		addOption(document.prodinput.plist, 'L Bow and T Fitting','L Bow and T Fitting');
		addOption(document.prodinput.plist, 'Low pressure switch','Low pressure switch');
		addOption(document.prodinput.plist, 'Mounting bracket','Mounting bracket');
		addOption(document.prodinput.plist, 'Pre Filter candle','Pre Filter candle');
		addOption(document.prodinput.plist, 'Pre Filter Housing','Pre Filter Housing');
		addOption(document.prodinput.plist, 'Pre Filter Spun','Pre Filter Spun');
		addOption(document.prodinput.plist, 'RO Membrane','RO Membrane');
		addOption(document.prodinput.plist, 'RO Membrane Housing','RO Membrane Housing');
		addOption(document.prodinput.plist, 'RO Pipe','RO Pipe');
		addOption(document.prodinput.plist, 'RO Pump','RO Pump');
		addOption(document.prodinput.plist, 'RO Tap','RO Tap');
		addOption(document.prodinput.plist, 'Sediment Filter','Sediment Filter');
		addOption(document.prodinput.plist, 'SMPS','SMPS');
		addOption(document.prodinput.plist, 'Solenoid Valve','Solenoid Valve');
		addOption(document.prodinput.plist, 'SPUN','SPUN');
		addOption(document.prodinput.plist, 'SPUN cartridges','SPUN cartridges');
		addOption(document.prodinput.plist, 'TDS Adjuster','TDS Adjuster');
		addOption(document.prodinput.plist, 'UF Membrane','UF Membrane');
		addOption(document.prodinput.plist, 'UV Choke','UV Choke');
		addOption(document.prodinput.plist, 'UV Housing','UV Housing');
		addOption(document.prodinput.plist, 'UV Lamp','UV Lamp');
		addOption(document.prodinput.plist, 'Water storage tank','Water storage tank');
		addOption(document.prodinput.plist, 'Wrench','Wrench');
	}


}
	

function Selectplistedit() {
    // ON selection of category this function will work

    removeAllOptions(document.prodinputedit.plist);
    addOption(document.prodinputedit.plist, "", "-- Select sub-category --", "");

    if (document.prodinputedit.Category.value == 'Carpentry') 
	{
        addOption(document.prodinputedit.plist, 'ALDROPS (NUCKLE, KUNDA)','ALDROPS (NUCKLE, KUNDA)');
		addOption(document.prodinputedit.plist, 'AUTO HINGES','AUTO HINGES');
		addOption(document.prodinputedit.plist, 'BALL CASTOR','BALL CASTOR');
		addOption(document.prodinputedit.plist, 'BRUSH HOLDER','BRUSH HOLDER');
		addOption(document.prodinputedit.plist, 'CUPBOARD LOCK','CUPBOARD LOCK');
		addOption(document.prodinputedit.plist, 'CURTAIN RING HOOK','CURTAIN RING HOOK');
		addOption(document.prodinputedit.plist, 'CURTAIN ROD','CURTAIN ROD');
		addOption(document.prodinputedit.plist, 'CURTAIN ROD BRACKETS','CURTAIN ROD BRACKETS');
		addOption(document.prodinputedit.plist, 'CURTAIN ROD HOLDER','CURTAIN ROD HOLDER');
		addOption(document.prodinputedit.plist, 'CURTAIN RODS','CURTAIN RODS');
		addOption(document.prodinputedit.plist, 'DOOR BOOT RUBBER','DOOR BOOT RUBBER');
		addOption(document.prodinputedit.plist, 'DOOR CHAIN & LOCK','DOOR CHAIN & LOCK');
		addOption(document.prodinputedit.plist, 'DOOR CLOSERS','DOOR CLOSERS');
		addOption(document.prodinputedit.plist, 'DOOR HANDLE','DOOR HANDLE');
		addOption(document.prodinputedit.plist, 'DOOR MAGNETIC CATCHER','DOOR MAGNETIC CATCHER');
		addOption(document.prodinputedit.plist, 'DOOR SILENCER','DOOR SILENCER');
		addOption(document.prodinputedit.plist, 'DOOR STOPPER','DOOR STOPPER');
		addOption(document.prodinputedit.plist, 'DOORS EYE','DOORS EYE');
		addOption(document.prodinputedit.plist, 'DRILL BITS - METAL','DRILL BITS - METAL');
		addOption(document.prodinputedit.plist, 'DRILL BITS - WOOD','DRILL BITS - WOOD');
		addOption(document.prodinputedit.plist, 'FIX CASTOR','FIX CASTOR');
		addOption(document.prodinputedit.plist, 'FLOOR SPRING','FLOOR SPRING');
		addOption(document.prodinputedit.plist, 'GAS SPRINGS','GAS SPRINGS');
		addOption(document.prodinputedit.plist, 'GATE HOOK','GATE HOOK');
		addOption(document.prodinputedit.plist, 'GLASS DOOR HANDLES','GLASS DOOR HANDLES');
		addOption(document.prodinputedit.plist, 'GLASS LOCK','GLASS LOCK');
		addOption(document.prodinputedit.plist, 'GLASS MIRROR','GLASS MIRROR');
		addOption(document.prodinputedit.plist, 'GLASS PATCH','GLASS PATCH');
		addOption(document.prodinputedit.plist, 'GLASS SLIDING RUNNER','GLASS SLIDING RUNNER');
		addOption(document.prodinputedit.plist, 'GLASS VACCUM','GLASS VACCUM');
		addOption(document.prodinputedit.plist, 'HANDLES - BRASS','HANDLES - BRASS');
		addOption(document.prodinputedit.plist, 'HEAVY DUTY NAILS','HEAVY DUTY NAILS');
		addOption(document.prodinputedit.plist, 'HINGES','HINGES');
		addOption(document.prodinputedit.plist, 'KHITI HANGER','KHITI HANGER');
		addOption(document.prodinputedit.plist, 'LATCH & HANDLES','LATCH & HANDLES');
		addOption(document.prodinputedit.plist, 'NAPKIN RING','NAPKIN RING');
		addOption(document.prodinputedit.plist, 'PLASTIC WALL PLUG/GITTI','PLASTIC WALL PLUG/GITTI');
		addOption(document.prodinputedit.plist, 'PLY CASTOR','PLY CASTOR');
		addOption(document.prodinputedit.plist, 'PLYWOOD SHEET','PLYWOOD SHEET');
		addOption(document.prodinputedit.plist, 'SHOWER HINGES','SHOWER HINGES');
		addOption(document.prodinputedit.plist, 'SLIDING DOOR BOLT','SLIDING DOOR BOLT');
		addOption(document.prodinputedit.plist, 'SOAP DISH','SOAP DISH');
		addOption(document.prodinputedit.plist, 'TOWEL RACK','TOWEL RACK');
		addOption(document.prodinputedit.plist, 'TOWEL ROD','TOWEL ROD');
		addOption(document.prodinputedit.plist, 'TOWER BOLT','TOWER BOLT');
		addOption(document.prodinputedit.plist, 'WHEEL CASTOR','WHEEL CASTOR');
		addOption(document.prodinputedit.plist, 'WINDOW STOPPER','WINDOW STOPPER');
		addOption(document.prodinputedit.plist, 'WOOD POLISH OIL','WOOD POLISH OIL');
		addOption(document.prodinputedit.plist, 'WOOD WALL PLUG/GITTI','WOOD WALL PLUG/GITTI');
		addOption(document.prodinputedit.plist, 'ZULA CHAIN','ZULA CHAIN');

    }
	
	
    if (document.prodinputedit.Category.value == 'Plumbing') 
	{	
		addOption(document.prodinputedit.plist, 'ANGLE COCK','ANGLE COCK');
		addOption(document.prodinputedit.plist, 'BALL COCK','BALL COCK');
		addOption(document.prodinputedit.plist, 'BALL VALVE','BALL VALVE');
		addOption(document.prodinputedit.plist, 'BALL VALVE - HANDLE','BALL VALVE - HANDLE');
		addOption(document.prodinputedit.plist, 'BEND WITH DOOR','BEND WITH DOOR');
		addOption(document.prodinputedit.plist, 'BIB COCK','BIB COCK');
		addOption(document.prodinputedit.plist, 'BIB COCK 2 IN 1','BIB COCK 2 IN 1');
		addOption(document.prodinputedit.plist, 'BUSHING','BUSHING');
		addOption(document.prodinputedit.plist, 'BUTTERFLY VALVE','BUTTERFLY VALVE');
		addOption(document.prodinputedit.plist, 'BUTTERFLY VALVE BOLT & NUTS','BUTTERFLY VALVE BOLT & NUTS');
		addOption(document.prodinputedit.plist, 'CAST IRON TAP','CAST IRON TAP');
		addOption(document.prodinputedit.plist, 'CHAMFERING TOOL','CHAMFERING TOOL');
		addOption(document.prodinputedit.plist, 'CONCEALED DIVERTER – SHOWER','CONCEALED DIVERTER – SHOWER');
		addOption(document.prodinputedit.plist, 'CONCEALED DIVERTER – SHOWER & SPOUT','CONCEALED DIVERTER – SHOWER & SPOUT');
		addOption(document.prodinputedit.plist, 'CONCEALED VALVE','CONCEALED VALVE');
		addOption(document.prodinputedit.plist, 'CONVERTER BUSHING','CONVERTER BUSHING');
		addOption(document.prodinputedit.plist, 'COUPLING','COUPLING');
		addOption(document.prodinputedit.plist, 'CROSS','CROSS');
		addOption(document.prodinputedit.plist, 'CROSS TEE','CROSS TEE');
		addOption(document.prodinputedit.plist, 'DOUBLE T WITH DOOR','DOUBLE T WITH DOOR');
		addOption(document.prodinputedit.plist, 'DRAIN WITH JALI','DRAIN WITH JALI');
		addOption(document.prodinputedit.plist, 'ELBOW','ELBOW');
		addOption(document.prodinputedit.plist, 'ELBOW 45°','ELBOW 45°');
		addOption(document.prodinputedit.plist, 'ELBOW 90°','ELBOW 90°');
		addOption(document.prodinputedit.plist, 'ELBOW 90° 3-WAY','ELBOW 90° 3-WAY');
		addOption(document.prodinputedit.plist, 'ELBOW 90° 4-WAY','ELBOW 90° 4-WAY');
		addOption(document.prodinputedit.plist, 'ELBOW HOLDER','ELBOW HOLDER');
		addOption(document.prodinputedit.plist, 'ELBOW WITH CLAMP','ELBOW WITH CLAMP');
		addOption(document.prodinputedit.plist, 'END CAP','END CAP');
		addOption(document.prodinputedit.plist, 'END PLUG THREADED','END PLUG THREADED');
		addOption(document.prodinputedit.plist, 'EXTENSION NIPPLE','EXTENSION NIPPLE');
		addOption(document.prodinputedit.plist, 'EXTENSION PIECES (CHROME PLATED)','EXTENSION PIECES (CHROME PLATED)');
		addOption(document.prodinputedit.plist, 'FAPT WASHER','FAPT WASHER');
		addOption(document.prodinputedit.plist, 'FEMALE ADAPTER','FEMALE ADAPTER');
		addOption(document.prodinputedit.plist, 'FEMALE ADAPTOR (BRASS THREADS)','FEMALE ADAPTOR (BRASS THREADS)');
		addOption(document.prodinputedit.plist, 'FEMALE ADAPTOR (CPVC THREADS)','FEMALE ADAPTOR (CPVC THREADS)');
		addOption(document.prodinputedit.plist, 'FEMALE BRASS UNION','FEMALE BRASS UNION');
		addOption(document.prodinputedit.plist, 'FEMALE EXT. BRASS ELBOW 90°','FEMALE EXT. BRASS ELBOW 90°');
		addOption(document.prodinputedit.plist, 'FLANGE - BLIND','FLANGE - BLIND');
		addOption(document.prodinputedit.plist, 'FLANGE - END CAP CLOSED (WITH RUBBER GASKET)','FLANGE - END CAP CLOSED (WITH RUBBER GASKET)');
		addOption(document.prodinputedit.plist, 'FLANGE - END CAP OPEN (WITH RUBBER GASKET)','FLANGE - END CAP OPEN (WITH RUBBER GASKET)');
		addOption(document.prodinputedit.plist, 'FLANGE - SOCKET','FLANGE - SOCKET');
		addOption(document.prodinputedit.plist, 'FLANGE - SPIGOT','FLANGE - SPIGOT');
		addOption(document.prodinputedit.plist, 'FLANGE RING - SOC','FLANGE RING - SOC');
		addOption(document.prodinputedit.plist, 'FLUSH TANK BALL COCK SET','FLUSH TANK BALL COCK SET');
		addOption(document.prodinputedit.plist, 'FLUSH TANK HANDLE (INSIDE)','FLUSH TANK HANDLE (INSIDE)');
		addOption(document.prodinputedit.plist, 'GATE VALVE','GATE VALVE');
		addOption(document.prodinputedit.plist, 'HALF ROUND PIPES','HALF ROUND PIPES');
		addOption(document.prodinputedit.plist, 'HEX NIPPLE','HEX NIPPLE');
		addOption(document.prodinputedit.plist, 'JOINT BRACKET','JOINT BRACKET');
		addOption(document.prodinputedit.plist, 'KITCHEN MIXER ADAPTOR','KITCHEN MIXER ADAPTOR');
		addOption(document.prodinputedit.plist, 'LEAKAGE REPAIR WATERPROOF TAPE','LEAKAGE REPAIR WATERPROOF TAPE');
		addOption(document.prodinputedit.plist, 'LONG RADIUS BEND','LONG RADIUS BEND');
		addOption(document.prodinputedit.plist, 'LUBRICANT','LUBRICANT');
		addOption(document.prodinputedit.plist, 'MALE ADAPTOR (BRASS THREADS)','MALE ADAPTOR (BRASS THREADS)');
		addOption(document.prodinputedit.plist, 'MALE ADAPTOR (CPVC THREADS)','MALE ADAPTOR (CPVC THREADS)');
		addOption(document.prodinputedit.plist, 'METAL CLAMP','METAL CLAMP');
		addOption(document.prodinputedit.plist, 'METAL STRAP','METAL STRAP');
		addOption(document.prodinputedit.plist, 'MULTI FLOOR TRAP','MULTI FLOOR TRAP');
		addOption(document.prodinputedit.plist, 'NIPPLE','NIPPLE');
		addOption(document.prodinputedit.plist, 'OLET','OLET');
		addOption(document.prodinputedit.plist, 'P, U, S OR J-SHAPED TRAP','P, U, S OR J-SHAPED TRAP');
		addOption(document.prodinputedit.plist, 'PILLAR COCK','PILLAR COCK');
		addOption(document.prodinputedit.plist, 'PIPE - ALUMINIUM','PIPE - ALUMINIUM');
		addOption(document.prodinputedit.plist, 'PIPE - CPVC','PIPE - CPVC');
		addOption(document.prodinputedit.plist, 'PIPE - GI','PIPE - GI');
		addOption(document.prodinputedit.plist, 'PIPE - MS','PIPE - MS');
		addOption(document.prodinputedit.plist, 'PIPE - PVC','PIPE - PVC');
		addOption(document.prodinputedit.plist, 'PIPE - RUBBER','PIPE - RUBBER');
		addOption(document.prodinputedit.plist, 'PIPE - STEEL','PIPE - STEEL');
		addOption(document.prodinputedit.plist, 'PIPE - UPVC','PIPE - UPVC');
		addOption(document.prodinputedit.plist, 'PIPE CLIP [WITH BRACKET]','PIPE CLIP [WITH BRACKET]');
		addOption(document.prodinputedit.plist, 'PIPE DOOR CAP','PIPE DOOR CAP');
		addOption(document.prodinputedit.plist, 'PLASTIC CLIP/CLAMP','PLASTIC CLIP/CLAMP');
		addOption(document.prodinputedit.plist, 'PLASTIC STRAP','PLASTIC STRAP');
		addOption(document.prodinputedit.plist, 'PLUG','PLUG');
		addOption(document.prodinputedit.plist, 'POWDER COATED METAL CLAMP','POWDER COATED METAL CLAMP');
		addOption(document.prodinputedit.plist, 'PRIMER','PRIMER');
		addOption(document.prodinputedit.plist, 'PVC CONNECTION','PVC CONNECTION');
		addOption(document.prodinputedit.plist, 'PVC WATER TAP HOSE CONNECTOR','PVC WATER TAP HOSE CONNECTOR');
		addOption(document.prodinputedit.plist, 'RATCHET CUTTER','RATCHET CUTTER');
		addOption(document.prodinputedit.plist, 'REDUCER','REDUCER');
		addOption(document.prodinputedit.plist, 'REDUCER BUSHING','REDUCER BUSHING');
		addOption(document.prodinputedit.plist, 'REDUCER COUPLER','REDUCER COUPLER');
		addOption(document.prodinputedit.plist, 'REDUCER COUPLING','REDUCER COUPLING');
		addOption(document.prodinputedit.plist, 'REDUCER ELBOW 90°','REDUCER ELBOW 90°');
		addOption(document.prodinputedit.plist, 'REDUCER TEE','REDUCER TEE');
		addOption(document.prodinputedit.plist, 'REDUCING FEMALE ADAPTOR','REDUCING FEMALE ADAPTOR');
		addOption(document.prodinputedit.plist, 'REDUCING MALE ADAPTOR','REDUCING MALE ADAPTOR');
		addOption(document.prodinputedit.plist, 'REDUCING T','REDUCING T');
		addOption(document.prodinputedit.plist, 'REDUCING Y','REDUCING Y');
		addOption(document.prodinputedit.plist, 'REDUCING Y WITH DOOR','REDUCING Y WITH DOOR');
		addOption(document.prodinputedit.plist, 'REPAIR COUPLER','REPAIR COUPLER');
		addOption(document.prodinputedit.plist, 'ROUND JALI','ROUND JALI');
		addOption(document.prodinputedit.plist, 'RUBBER DOOR GASKET','RUBBER DOOR GASKET');
		addOption(document.prodinputedit.plist, 'RUBBER RING','RUBBER RING');
		addOption(document.prodinputedit.plist, 'RUBBER WASHER - UNION O-RING','RUBBER WASHER - UNION O-RING');
		addOption(document.prodinputedit.plist, 'RUNNING OUTLET','RUNNING OUTLET');
		addOption(document.prodinputedit.plist, 'SERVICE SADDLE','SERVICE SADDLE');
		addOption(document.prodinputedit.plist, 'SHORT BEND','SHORT BEND');
		addOption(document.prodinputedit.plist, 'SHORT STOP END','SHORT STOP END');
		addOption(document.prodinputedit.plist, 'SHOWER ROSE BRASS','SHOWER ROSE BRASS');
		addOption(document.prodinputedit.plist, 'SILICON WATER TUBE','SILICON WATER TUBE');
		addOption(document.prodinputedit.plist, 'SINGLE T WITH DOOR','SINGLE T WITH DOOR');
		addOption(document.prodinputedit.plist, 'SINGLE Y WITH DOOR','SINGLE Y WITH DOOR');
		addOption(document.prodinputedit.plist, 'SIPHON SET','SIPHON SET');
		addOption(document.prodinputedit.plist, 'SOLVENT CEMENT','SOLVENT CEMENT');
		addOption(document.prodinputedit.plist, 'SS CLAMP','SS CLAMP');
		addOption(document.prodinputedit.plist, 'STEP OVER BEND','STEP OVER BEND');
		addOption(document.prodinputedit.plist, 'STOP COCK','STOP COCK');
		addOption(document.prodinputedit.plist, 'STOP END OUTLET','STOP END OUTLET');
		addOption(document.prodinputedit.plist, 'STRIP CONNECTOR','STRIP CONNECTOR');
		addOption(document.prodinputedit.plist, 'SUPPORT BRACKET','SUPPORT BRACKET');
		addOption(document.prodinputedit.plist, 'SWEEP BEND - SOCKET AT BOTH SIDES','SWEEP BEND - SOCKET AT BOTH SIDES');
		addOption(document.prodinputedit.plist, 'TANK ADAPTOR (SOCKET TYPE)','TANK ADAPTOR (SOCKET TYPE)');
		addOption(document.prodinputedit.plist, 'TANK ADAPTOR (SPIGOT TYPE)','TANK ADAPTOR (SPIGOT TYPE)');
		addOption(document.prodinputedit.plist, 'TANK NIPPLE','TANK NIPPLE');
		addOption(document.prodinputedit.plist, 'TANK NIPPLE WASHER','TANK NIPPLE WASHER');
		addOption(document.prodinputedit.plist, 'TEE','TEE');
		addOption(document.prodinputedit.plist, 'TEE 90°','TEE 90°');
		addOption(document.prodinputedit.plist, 'TEE HOLDER','TEE HOLDER');
		addOption(document.prodinputedit.plist, 'THREADED END PLUG','THREADED END PLUG');
		addOption(document.prodinputedit.plist, 'TOOLKIT BOX','TOOLKIT BOX');
		addOption(document.prodinputedit.plist, 'TRANSITION BUSHING','TRANSITION BUSHING');
		addOption(document.prodinputedit.plist, 'TRANSITION COUPLING','TRANSITION COUPLING');
		addOption(document.prodinputedit.plist, 'UNION','UNION');
		addOption(document.prodinputedit.plist, 'VENT COWL','VENT COWL');
		addOption(document.prodinputedit.plist, 'VENT COWL WITH JALI','VENT COWL WITH JALI');
		addOption(document.prodinputedit.plist, 'WALL MIXTURE - ADAPTER','WALL MIXTURE - ADAPTER');
		addOption(document.prodinputedit.plist, 'WALL MIXTURE - BEND','WALL MIXTURE - BEND');
		addOption(document.prodinputedit.plist, 'WALL MIXTURE - NUTS','WALL MIXTURE - NUTS');
		addOption(document.prodinputedit.plist, 'WALL MIXTURE SET','WALL MIXTURE SET');
		addOption(document.prodinputedit.plist, 'WASH BASIN WASTE COUPLING','WASH BASIN WASTE COUPLING');
		addOption(document.prodinputedit.plist, 'WASTE PIPE (URINALS)','WASTE PIPE (URINALS)');
		addOption(document.prodinputedit.plist, 'WASTE PIPE (WASHBASIN & SINK)','WASTE PIPE (WASHBASIN & SINK)');
}

    if (document.prodinputedit.Category.value == 'Geyser') 
	{
		addOption(document.prodinputedit.plist, 'ALUMINIUM TAPE','ALUMINIUM TAPE');
		addOption(document.prodinputedit.plist, 'ANODE RODS','ANODE RODS');
		addOption(document.prodinputedit.plist, 'BATTERY BOX','BATTERY BOX');
		addOption(document.prodinputedit.plist, 'BAYONET FUSE','BAYONET FUSE');
		addOption(document.prodinputedit.plist, 'BRACKET (BATTERY BOX)','BRACKET (BATTERY BOX)');
		addOption(document.prodinputedit.plist, 'BRACKET (BURNER)','BRACKET (BURNER)');
		addOption(document.prodinputedit.plist, 'BRACKET (OUT WATER)','BRACKET (OUT WATER)');
		addOption(document.prodinputedit.plist, 'BRACKET (PULSE)','BRACKET (PULSE)');
		addOption(document.prodinputedit.plist, 'BRACKET (VALVE)','BRACKET (VALVE)');
		addOption(document.prodinputedit.plist, 'BURNER','BURNER');
		addOption(document.prodinputedit.plist, 'BURNER DOOR INSULATION','BURNER DOOR INSULATION');
		addOption(document.prodinputedit.plist, 'BURNER DOOR SILICON GASKET','BURNER DOOR SILICON GASKET');
		addOption(document.prodinputedit.plist, 'BURNER STOPPER','BURNER STOPPER');
		addOption(document.prodinputedit.plist, 'CLIP SENSOR','CLIP SENSOR');
		addOption(document.prodinputedit.plist, 'COLD AND HOT WATER CONTROL','COLD AND HOT WATER CONTROL');
		addOption(document.prodinputedit.plist, 'CONCENTRIC ADAPTOR','CONCENTRIC ADAPTOR');
		addOption(document.prodinputedit.plist, 'CONDENSATE TRAP','CONDENSATE TRAP');
		addOption(document.prodinputedit.plist, 'CONNECTING LINES/WIRES','CONNECTING LINES/WIRES');
		addOption(document.prodinputedit.plist, 'CONNECTIONS BOARD','CONNECTIONS BOARD');
		addOption(document.prodinputedit.plist, 'CONTROL (GAS VALVE)','CONTROL (GAS VALVE)');
		addOption(document.prodinputedit.plist, 'CONTROL KNOB','CONTROL KNOB');
		addOption(document.prodinputedit.plist, 'COVER REPAIR SET','COVER REPAIR SET');
		addOption(document.prodinputedit.plist, 'DISPLAY','DISPLAY');
		addOption(document.prodinputedit.plist, 'DISPLAY BOARD','DISPLAY BOARD');
		addOption(document.prodinputedit.plist, 'FAN','FAN');
		addOption(document.prodinputedit.plist, 'FAN GASKET','FAN GASKET');
		addOption(document.prodinputedit.plist, 'FILTER (WATER)','FILTER (WATER)');
		addOption(document.prodinputedit.plist, 'FLANGE','FLANGE');
		addOption(document.prodinputedit.plist, 'FLANGE GASKET','FLANGE GASKET');
		addOption(document.prodinputedit.plist, 'FLANGE SCREW','FLANGE SCREW');
		addOption(document.prodinputedit.plist, 'FOAM','FOAM');
		addOption(document.prodinputedit.plist, 'FUSE','FUSE');
		addOption(document.prodinputedit.plist, 'GAS INLET/BURNER DOOR ASSEMBLY','GAS INLET/BURNER DOOR ASSEMBLY');
		addOption(document.prodinputedit.plist, 'GAS VALVE','GAS VALVE');
		addOption(document.prodinputedit.plist, 'GASKET','GASKET');
		addOption(document.prodinputedit.plist, 'GRAUNDIG TERMINAL','GRAUNDIG TERMINAL');
		addOption(document.prodinputedit.plist, 'HEAT EXCHANGER','HEAT EXCHANGER');
		addOption(document.prodinputedit.plist, 'HEAT EXCHANGER','HEAT EXCHANGER');
		addOption(document.prodinputedit.plist, 'HEATING ELEMENT','HEATING ELEMENT');
		addOption(document.prodinputedit.plist, 'HEATING ELEMENTS','HEATING ELEMENTS');
		addOption(document.prodinputedit.plist, 'HEXAGONAL NUT','HEXAGONAL NUT');
		addOption(document.prodinputedit.plist, 'IGNITER','IGNITER');
		addOption(document.prodinputedit.plist, 'IGNITER SPARK ','IGNITER SPARK ');
		addOption(document.prodinputedit.plist, 'IGNITION CABLE','IGNITION CABLE');
		addOption(document.prodinputedit.plist, 'IGNITION ELECTRODE','IGNITION ELECTRODE');
		addOption(document.prodinputedit.plist, 'IGNITION ELECTRODE GASKET','IGNITION ELECTRODE GASKET');
		addOption(document.prodinputedit.plist, 'IGNITION LEAD','IGNITION LEAD');
		addOption(document.prodinputedit.plist, 'IGNITION UNIT','IGNITION UNIT');
		addOption(document.prodinputedit.plist, 'INJECTOR (LPG)','INJECTOR (LPG)');
		addOption(document.prodinputedit.plist, 'INJECTOR (SPUD)','INJECTOR (SPUD)');
		addOption(document.prodinputedit.plist, 'INJECTOR PILOT','INJECTOR PILOT');
		addOption(document.prodinputedit.plist, 'KIT (ELECTRONIC SENSOR)','KIT (ELECTRONIC SENSOR)');
		addOption(document.prodinputedit.plist, 'MAIN PCB','MAIN PCB');
		addOption(document.prodinputedit.plist, 'MANUAL AIR VENT','MANUAL AIR VENT');
		addOption(document.prodinputedit.plist, 'MIXER (WATER CONTROL)','MIXER (WATER CONTROL)');
		addOption(document.prodinputedit.plist, 'NON RETURN VALVE','NON RETURN VALVE');
		addOption(document.prodinputedit.plist, 'NUT','NUT');
		addOption(document.prodinputedit.plist, 'NUT (GLAND)','NUT (GLAND)');
		addOption(document.prodinputedit.plist, 'NUT (THERMOCOUPLE)','NUT (THERMOCOUPLE)');
		addOption(document.prodinputedit.plist, 'NUT (OLIVE PILOT)','NUT (OLIVE PILOT)');
		addOption(document.prodinputedit.plist, 'O’RINGS','O’RINGS');
		addOption(document.prodinputedit.plist, 'OLIVE (PILOT TUBE)','OLIVE (PILOT TUBE)');
		addOption(document.prodinputedit.plist, 'PIEZO','PIEZO');
		addOption(document.prodinputedit.plist, 'PILOT ASSEMBLY','PILOT ASSEMBLY');
		addOption(document.prodinputedit.plist, 'PILOT BURNER','PILOT BURNER');
		addOption(document.prodinputedit.plist, 'PLASTIC COVER','PLASTIC COVER');
		addOption(document.prodinputedit.plist, 'REGULATOR','REGULATOR');
		addOption(document.prodinputedit.plist, 'SCREW','SCREW');
		addOption(document.prodinputedit.plist, 'SENSE PROBE','SENSE PROBE');
		addOption(document.prodinputedit.plist, 'SENSE PROBE GASKET','SENSE PROBE GASKET');
		addOption(document.prodinputedit.plist, 'SENSOR (ASSEMBLY)','SENSOR (ASSEMBLY)');
		addOption(document.prodinputedit.plist, 'SIGNAL LAMP','SIGNAL LAMP');
		addOption(document.prodinputedit.plist, 'SMOKE TUBE','SMOKE TUBE');
		addOption(document.prodinputedit.plist, 'SPARK GENERATOR','SPARK GENERATOR');
		addOption(document.prodinputedit.plist, 'SPRING (REGULATOR)','SPRING (REGULATOR)');
		addOption(document.prodinputedit.plist, 'SWITCH (110 DEG) OVER HEAT','SWITCH (110 DEG) OVER HEAT');
		addOption(document.prodinputedit.plist, 'SWITCH (OVER TEMP CUTOUT)','SWITCH (OVER TEMP CUTOUT)');
		addOption(document.prodinputedit.plist, 'TEMPERATURE SENSOR','TEMPERATURE SENSOR');
		addOption(document.prodinputedit.plist, 'THERMISTER','THERMISTER');
		addOption(document.prodinputedit.plist, 'THERMOCOUPLE','THERMOCOUPLE');
		addOption(document.prodinputedit.plist, 'THERMOCOUPLE (2 WIRE)','THERMOCOUPLE (2 WIRE)');
		addOption(document.prodinputedit.plist, 'THERMOMETER','THERMOMETER');
		addOption(document.prodinputedit.plist, 'THERMOSTAT','THERMOSTAT');
		addOption(document.prodinputedit.plist, 'UNION SET','UNION SET');
		addOption(document.prodinputedit.plist, 'VALVE (BY-PASS)','VALVE (BY-PASS)');
		addOption(document.prodinputedit.plist, 'VALVE (MAIN SOLENOID)','VALVE (MAIN SOLENOID)');
		addOption(document.prodinputedit.plist, 'VALVE (PILOT SOLENOID)','VALVE (PILOT SOLENOID)');
		addOption(document.prodinputedit.plist, 'VALVE (PRESSURE RELIEF )','VALVE (PRESSURE RELIEF )');
		addOption(document.prodinputedit.plist, 'VALVE (SAFETY)','VALVE (SAFETY)');
		addOption(document.prodinputedit.plist, 'VALVE (TEMPERING)','VALVE (TEMPERING)');
		addOption(document.prodinputedit.plist, 'VALVE NOZZLE','VALVE NOZZLE');
		addOption(document.prodinputedit.plist, 'VORTEX FLOW SENSOR','VORTEX FLOW SENSOR');
		addOption(document.prodinputedit.plist, 'WASHER (CUP) BRASS','WASHER (CUP) BRASS');
		addOption(document.prodinputedit.plist, 'WASHERS','WASHERS');
	}
	
    if (document.prodinputedit.Category.value == 'Generic') 
	{
		addOption(document.prodinputedit.plist, 'BLADE/CUTTER','BLADE/CUTTER');
		addOption(document.prodinputedit.plist, 'BOLT','BOLT');
		addOption(document.prodinputedit.plist, 'CLEANING BRUSH','CLEANING BRUSH');
		addOption(document.prodinputedit.plist, 'M-SEAL','M-SEAL');
		addOption(document.prodinputedit.plist, 'NUT','NUT');
		addOption(document.prodinputedit.plist, 'NAILS - SMALL','NAILS - SMALL');
		addOption(document.prodinputedit.plist, 'NAILS - LARGE','NAILS - LARGE');
		addOption(document.prodinputedit.plist, 'OTHER ADHESIVES','OTHER ADHESIVES');
		addOption(document.prodinputedit.plist, 'PADLOCK','PADLOCK');
		addOption(document.prodinputedit.plist, 'POLISH/SAND PAPER','POLISH/SAND PAPER');
		addOption(document.prodinputedit.plist, 'SCREWDRIVER','SCREWDRIVER');
		addOption(document.prodinputedit.plist, 'SCREW','SCREW');
		addOption(document.prodinputedit.plist, 'SUPER GLUE','SUPER GLUE');
		addOption(document.prodinputedit.plist, 'TEFLON TAPE','TEFLON TAPE');
		addOption(document.prodinputedit.plist, 'WALL PLUG/GITTI - PLASTIC','WALL PLUG/GITTI - PLASTIC');
		addOption(document.prodinputedit.plist, 'WALL PLUG/GITTI - WOODEN','WALL PLUG/GITTI - WOODEN');
		addOption(document.prodinputedit.plist, 'WD-40','WD-40');
		addOption(document.prodinputedit.plist, 'ZIP TIE','ZIP TIE');
	}
	
		if (document.prodinputedit.Category.value == 'Electrical') 
	{
		addOption(document.prodinputedit.plist,'2 pin Socket','2 pin Socket');
		addOption(document.prodinputedit.plist,'2, 3, 4 & 6 Multicore Cable','2, 3, 4 & 6 Multicore Cable');
		addOption(document.prodinputedit.plist,'2+3 pin Socket','2+3 pin Socket');
		addOption(document.prodinputedit.plist,'Adaptor','Adaptor');
		addOption(document.prodinputedit.plist,'Air Blower','Air Blower');
		addOption(document.prodinputedit.plist,'Angle Holder','Angle Holder');
		addOption(document.prodinputedit.plist,'Batten Holder','Batten Holder');
		addOption(document.prodinputedit.plist,'Blade','Blade');
		addOption(document.prodinputedit.plist,'BLDC Fans','BLDC Fans');
		addOption(document.prodinputedit.plist,'Brass Cup Washer','Brass Cup Washer');
		addOption(document.prodinputedit.plist,'Buzzer','Buzzer');
		addOption(document.prodinputedit.plist,'Cable Glands','Cable Glands');
		addOption(document.prodinputedit.plist,'Cable Tie','Cable Tie');
		addOption(document.prodinputedit.plist,'Capacitor','Capacitor');
		addOption(document.prodinputedit.plist,'Ceiling Fans','Ceiling Fans');
		addOption(document.prodinputedit.plist,'Ceiling Rose','Ceiling Rose');
		addOption(document.prodinputedit.plist,'CFL','CFL');
		addOption(document.prodinputedit.plist,'CFL Holder','CFL Holder');
		addOption(document.prodinputedit.plist,'Changeover Switch','Changeover Switch');
		addOption(document.prodinputedit.plist,'Coaxial Cable','Coaxial Cable');
		addOption(document.prodinputedit.plist,'Combi Socket','Combi Socket');
		addOption(document.prodinputedit.plist,'Commercial LED Lights','Commercial LED Lights');
		addOption(document.prodinputedit.plist,'Contactor','Contactor');
		addOption(document.prodinputedit.plist,'Converting Holder','Converting Holder');
		addOption(document.prodinputedit.plist,'Converting Plugs','Converting Plugs');
		addOption(document.prodinputedit.plist,'Copper Ballasts','Copper Ballasts');
		addOption(document.prodinputedit.plist,'Decorative Lights String','Decorative Lights String');
		addOption(document.prodinputedit.plist,'Desk Lamp Light','Desk Lamp Light');
		addOption(document.prodinputedit.plist,'Ding-Dong Bell','Ding-Dong Bell');
		addOption(document.prodinputedit.plist,'Drill Bits','Drill Bits');
		addOption(document.prodinputedit.plist,'Drill Machine','Drill Machine');
		addOption(document.prodinputedit.plist,'Dry Iron','Dry Iron');
		addOption(document.prodinputedit.plist,'Earthing Accesories','Earthing Accesories');
		addOption(document.prodinputedit.plist,'Electric Clamp','Electric Clamp');
		addOption(document.prodinputedit.plist,'Electromagnetic Ballasts','Electromagnetic Ballasts');
		addOption(document.prodinputedit.plist,'Electronic Ballasts','Electronic Ballasts');
		addOption(document.prodinputedit.plist,'Exhaust Fans','Exhaust Fans');
		addOption(document.prodinputedit.plist,'Fan Down Rod','Fan Down Rod');
		addOption(document.prodinputedit.plist,'Fan Regulator & Dimmer','Fan Regulator & Dimmer');
		addOption(document.prodinputedit.plist,'Fastner','Fastner');
		addOption(document.prodinputedit.plist,'Ferrule Ring/Cap','Ferrule Ring/Cap');
		addOption(document.prodinputedit.plist,'Flexible Conduits','Flexible Conduits');
		addOption(document.prodinputedit.plist,'Flood Light','Flood Light');
		addOption(document.prodinputedit.plist,'Geyser','Geyser');
		addOption(document.prodinputedit.plist,'Glass Fuse','Glass Fuse');
		addOption(document.prodinputedit.plist,'Halogen & HID Lamps Holder','Halogen & HID Lamps Holder');
		addOption(document.prodinputedit.plist,'Halogen Lamp','Halogen Lamp');
		addOption(document.prodinputedit.plist,'Hammer','Hammer');
		addOption(document.prodinputedit.plist,'Hand Blender','Hand Blender');
		addOption(document.prodinputedit.plist,'HID Ballast','HID Ballast');
		addOption(document.prodinputedit.plist,'House Wire','House Wire');
		addOption(document.prodinputedit.plist,'HRC Fuse','HRC Fuse');
		addOption(document.prodinputedit.plist,'Ignitor','Ignitor');
		addOption(document.prodinputedit.plist,'Indicator','Indicator');
		addOption(document.prodinputedit.plist,'Insulation Tape','Insulation Tape');
		addOption(document.prodinputedit.plist,'Intermediate switch','Intermediate switch');
		addOption(document.prodinputedit.plist,'Juicer Mixer Grinder','Juicer Mixer Grinder');
		addOption(document.prodinputedit.plist,'LAN cable','LAN cable');
		addOption(document.prodinputedit.plist,'LED Battens','LED Battens');
		addOption(document.prodinputedit.plist,'LED Bulbs','LED Bulbs');
		addOption(document.prodinputedit.plist,'LED Downlights','LED Downlights');
		addOption(document.prodinputedit.plist,'LED Driver','LED Driver');
		addOption(document.prodinputedit.plist,'LED GU10 or MR16','LED GU10 or MR16');
		addOption(document.prodinputedit.plist,'LED Panels','LED Panels');
		addOption(document.prodinputedit.plist,'LED Profile Patti','LED Profile Patti');
		addOption(document.prodinputedit.plist,'LED Spotlight','LED Spotlight');
		addOption(document.prodinputedit.plist,'LED Strips','LED Strips');
		addOption(document.prodinputedit.plist,'LED Surface Light','LED Surface Light');
		addOption(document.prodinputedit.plist,'Luxury Fans','Luxury Fans');
		addOption(document.prodinputedit.plist,'Main switch/MCB','Main switch/MCB');
		addOption(document.prodinputedit.plist,'MCB Distribution Box','MCB Distribution Box');
		addOption(document.prodinputedit.plist,'MCCB','MCCB');
		addOption(document.prodinputedit.plist,'Mixer Grinder','Mixer Grinder');
		addOption(document.prodinputedit.plist,'Module Plate','Module Plate');
		addOption(document.prodinputedit.plist,'Motor Starter','Motor Starter');
		addOption(document.prodinputedit.plist,'Multi Meter','Multi Meter');
		addOption(document.prodinputedit.plist,'Multiplug ','Multiplug ');
		addOption(document.prodinputedit.plist,'Multiplug extension board','Multiplug extension board');
		addOption(document.prodinputedit.plist,'Musical Bell','Musical Bell');
		addOption(document.prodinputedit.plist,'Nut Bolts','Nut Bolts');
		addOption(document.prodinputedit.plist,'One-way switch','One-way switch');
		addOption(document.prodinputedit.plist,'Pedestal Fans','Pedestal Fans');
		addOption(document.prodinputedit.plist,'Pendent Holder','Pendent Holder');
		addOption(document.prodinputedit.plist,'Plier','Plier');
		addOption(document.prodinputedit.plist,'Plug Tops','Plug Tops');
		addOption(document.prodinputedit.plist,'Power Strip','Power Strip');
		addOption(document.prodinputedit.plist,'Pvc cable Clips','Pvc cable Clips');
		addOption(document.prodinputedit.plist,'PVC Casing-Capping','PVC Casing-Capping');
		addOption(document.prodinputedit.plist,'PVC clip','PVC clip');
		addOption(document.prodinputedit.plist,'Pvc Gitti/Wall Plug','Pvc Gitti/Wall Plug');
		addOption(document.prodinputedit.plist,'RCCB','RCCB');
		addOption(document.prodinputedit.plist,'Relay','Relay');
		addOption(document.prodinputedit.plist,'RJ11 Sockets','RJ11 Sockets');
		addOption(document.prodinputedit.plist,'RJ45 Sockets','RJ45 Sockets');
		addOption(document.prodinputedit.plist,'Room Heater','Room Heater');
		addOption(document.prodinputedit.plist,'Screw Driver','Screw Driver');
		addOption(document.prodinputedit.plist,'Screws','Screws');
		addOption(document.prodinputedit.plist,'Shield Wire','Shield Wire');
		addOption(document.prodinputedit.plist,'Single Core Wire','Single Core Wire');
		addOption(document.prodinputedit.plist,'Socket outlet/plug','Socket outlet/plug');
		addOption(document.prodinputedit.plist,'Spanner','Spanner');
		addOption(document.prodinputedit.plist,'Speaker Wire','Speaker Wire');
		addOption(document.prodinputedit.plist,'Steam Iron','Steam Iron');
		addOption(document.prodinputedit.plist,'Submersible Cable','Submersible Cable');
		addOption(document.prodinputedit.plist,'Surface Box','Surface Box');
		addOption(document.prodinputedit.plist,'Suspended LED Lights','Suspended LED Lights');
		addOption(document.prodinputedit.plist,'T-5 Fitting 2 Feet','T-5 Fitting 2 Feet');
		addOption(document.prodinputedit.plist,'T-5 Fitting 4 Feet','T-5 Fitting 4 Feet');
		addOption(document.prodinputedit.plist,'T-8 Fitting 4 Feet','T-8 Fitting 4 Feet');
		addOption(document.prodinputedit.plist,'Table & Personal Fans','Table & Personal Fans');
		addOption(document.prodinputedit.plist,'Telephone Wire','Telephone Wire');
		addOption(document.prodinputedit.plist,'Tester','Tester');
		addOption(document.prodinputedit.plist,'Thimble/Lugs ','Thimble/Lugs ');
		addOption(document.prodinputedit.plist,'Tool Kits','Tool Kits');
		addOption(document.prodinputedit.plist,'Tower Fans','Tower Fans');
		addOption(document.prodinputedit.plist,'Transformer','Transformer');
		addOption(document.prodinputedit.plist,'Tube Light Holder','Tube Light Holder');
		addOption(document.prodinputedit.plist,'Tubelights','Tubelights');
		addOption(document.prodinputedit.plist,'Tv Sockets','Tv Sockets');
		addOption(document.prodinputedit.plist,'Twin Twisted Wire','Twin Twisted Wire');
		addOption(document.prodinputedit.plist,'Two-way switch','Two-way switch');
		addOption(document.prodinputedit.plist,'UV light','UV light');
		addOption(document.prodinputedit.plist,'Wall Fans','Wall Fans');
		addOption(document.prodinputedit.plist,'Wire Clip','Wire Clip');
		addOption(document.prodinputedit.plist,'Wire Nuts','Wire Nuts');
		addOption(document.prodinputedit.plist,'Wireles Bell','Wireles Bell');
		addOption(document.prodinputedit.plist,'Wrench','Wrench');
	}
	
	if (document.prodinputedit.Category.value == 'Waterpurifier') 
	{
		addOption(document.prodinputedit.plist, 'Adaptor','Adaptor');
		addOption(document.prodinputedit.plist, 'Alkaline Water Filter','Alkaline Water Filter');
		addOption(document.prodinputedit.plist, 'carbon block','carbon block');
		addOption(document.prodinputedit.plist, 'Carbon Filter','Carbon Filter');
		addOption(document.prodinputedit.plist, 'Elastic hose/Pipe','Elastic hose/Pipe');
		addOption(document.prodinputedit.plist, 'Flow restrictor','Flow restrictor');
		addOption(document.prodinputedit.plist, 'Flush kit','Flush kit');
		addOption(document.prodinputedit.plist, 'High pressure switch','High pressure switch');
		addOption(document.prodinputedit.plist, 'In-line cartridge','In-line cartridge');
		addOption(document.prodinputedit.plist, 'L Bow and T Fitting','L Bow and T Fitting');
		addOption(document.prodinputedit.plist, 'Low pressure switch','Low pressure switch');
		addOption(document.prodinputedit.plist, 'Mounting bracket','Mounting bracket');
		addOption(document.prodinputedit.plist, 'Pre Filter candle','Pre Filter candle');
		addOption(document.prodinputedit.plist, 'Pre Filter Housing','Pre Filter Housing');
		addOption(document.prodinputedit.plist, 'Pre Filter Spun','Pre Filter Spun');
		addOption(document.prodinputedit.plist, 'RO Membrane','RO Membrane');
		addOption(document.prodinputedit.plist, 'RO Membrane Housing','RO Membrane Housing');
		addOption(document.prodinputedit.plist, 'RO Pipe','RO Pipe');
		addOption(document.prodinputedit.plist, 'RO Pump','RO Pump');
		addOption(document.prodinputedit.plist, 'RO Tap','RO Tap');
		addOption(document.prodinputedit.plist, 'Sediment Filter','Sediment Filter');
		addOption(document.prodinputedit.plist, 'SMPS','SMPS');
		addOption(document.prodinputedit.plist, 'Solenoid Valve','Solenoid Valve');
		addOption(document.prodinputedit.plist, 'SPUN','SPUN');
		addOption(document.prodinputedit.plist, 'SPUN cartridges','SPUN cartridges');
		addOption(document.prodinputedit.plist, 'TDS Adjuster','TDS Adjuster');
		addOption(document.prodinputedit.plist, 'UF Membrane','UF Membrane');
		addOption(document.prodinputedit.plist, 'UV Choke','UV Choke');
		addOption(document.prodinputedit.plist, 'UV Housing','UV Housing');
		addOption(document.prodinputedit.plist, 'UV Lamp','UV Lamp');
		addOption(document.prodinputedit.plist, 'Water storage tank','Water storage tank');
		addOption(document.prodinputedit.plist, 'Wrench','Wrench');		
	}	
	
}
	
	function removeAllOptions(selectbox) {
    var i;
    for (i = selectbox.options.length - 1; i >= 0; i--) 
    {
        selectbox.remove(i);
    }
}


function addOption(selectbox, value, text) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;

    selectbox.options.add(optn);
}


        function nowdatetime() {
            /* var options = { weekday: 'long',  day: 'numeric', month: 'long', year: 'numeric',  };
            var today  = new Date();
            var dateshow= today.toLocaleDateString("en-IN", options);
            console.log(dateshow);*/

            var today = new Date();
            var datetime = today.toLocaleString([], {
                dateStyle: 'medium',
                timeStyle: 'short'
            });
            console.log(datetime);
            document.getElementById('curdate').innerHTML = datetime;
        }

        function idgen() {
            var date = new Date();
            var id = ("00" + date.getDate()).slice(-2) + ("00" + (date.getMonth() + 1)).slice(-2) + date.getFullYear() +
                ("00" + date.getHours()).slice(-2) + ("00" + date.getMinutes()).slice(-2);

            console.log(id);
            document.getElementById('curid').innerHTML = id;
        }

        function setcustdetails()
        {
            var custname= document.getElementById('custname').value ;
            var custadr= document.getElementById('custadr').value ;
            var custcontact= document.getElementById('custcontact').value;
            
            document.getElementById('cust_name').innerHTML =  custname;
			
			if(!custcontact) 
			{ document.getElementById("cust_contact").innerHTML = "--"; } 
			else	{ document.getElementById("cust_contact").innerHTML = custcontact; }
			
			if(!custadr) 
			{ document.getElementById("cust_adr").innerHTML =  "--"; } 
			else	{ document.getElementById("cust_adr").innerHTML =  custadr; }
        }

        function sumamount() {
            var table = document.getElementById("billdata"), sumVal = 0;
            for(var i = 1; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseInt(table.rows[i].cells[5].innerHTML);
                console.log("sumval inside = "+sumVal);
            }
            console.log("sumval outside = "+sumVal);
            document.getElementById("totalamount").innerHTML =  sumVal;
        }


        function PrintDiv() {
            //Get the HTML of div
            var divElements = document.getElementById('printcontent').innerHTML;
            var printWindow = window.open("", "_blank", "");
            //open the window
            printWindow.document.open();
            //write the html to the new window, link to css file
            printWindow.document.write(
                '<html><head><title> Print invoice </title><link rel="stylesheet" type="text/css" href="assets/bootstrap.new.css" >'
                );
            printWindow.document.write(
                '<style> @media print{ #billdata th:last-child { display: none; } #billdata td:last-child { display: none; }} </style> </head><body class="container">'
                );
            printWindow.document.write(divElements);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.focus();
            //The Timeout is ONLY to make Safari work, but it still works with FF, IE & Chrome.
            setTimeout(function () {
                printWindow.print();
            }, 100);
        }
