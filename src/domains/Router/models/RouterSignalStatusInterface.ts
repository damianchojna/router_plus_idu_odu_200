import RouterStatusConnection from "./RouterStatusConnection"

export default interface RouterSignalStatusInterface {
    connectionStatus: RouterStatusConnection
    singalLevel: string // Good Signal | No Signal
    simCardStatus: string // USIM Ready
    signalRsrp: number // -84 dBm
    remote: number // 7
    iduVer: string //CPE2_PT12_PL_V1.4.7.bin
    oduVer: string //ATL2_AT_2.2.44
    dtbVer: string // Disable
    haveSms: number // 8
    fullSms: number // 0
    getOperatorName: string // Plus
}

/*
    0   Connected
    1   Good Signal
    2   USIM Ready
    3   -63 dBm
    4   -84 dBm
    5   1
    6   7
    7   CPE2_PT12_PL_V1.4.7.bin
    8   ATL2_AT_2.2.44
    9   Disable
    10  plus
    11  8
    12  0
    13  0
    14  Plus


	var all_str = new Array();
	all_str = str.split("\n");
	connectionStatus = all_str[0];
	singallevel = all_str[1];
	simcardstatus = all_str[2];
    signalRsrp  = all_str[4];
	remote = all_str[6];
 	iduver = all_str[7];
	oduver = all_str[8];
    dtbver = all_str[9];
	havesms = all_str[11];
	fullsms = all_str[12];
	getOperatorName=all_str[14];


    if(processtimes+60 < oldprocesstimes) {
		top.location.href = url;
	}

	oldprocesstimes = processtimes;

	iduver=iduver.replace(".bin","") ;
	if((oduver == "Disable"))
		oduver = "";
	 if(iduver == "Unknown")
	 {
		iduver = "";
	 }
	  if(oduver == "Unknown")
	 {
		oduver = "";
	 }

        if(connectionStatus == "Connected" && singallevel == "No Signal")
        {
               singallevel = "Low Signal";

        }


    if(iduver == "" && oduver == "")
	{
		iduver = curriduver;
		oduver = a[3];
	}

        if((oduver == "Disable"))
            oduver = "";
		if((dtbver == "Disable"))
            dtbver = "";


	if(remote == 9)
	{

		var r=confirm(document.getElementById("remotenewupdate").value)
  		if (r==true)
    	{
   			javascript:go('/goform/remoteUpgradeStart');
    	}

		remotetag = 0;
	}

	if(remote == 100 && remotetag == 0)
	{
		alert(document.getElementById("updatealert100").value +" "+iduver + "  " + oduver + "\n"+document.getElementById("updatealert102").value);
		remotetag = 1;
	}
 */
