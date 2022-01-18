# JB.DateTimePicker for TwinCAT HMI

Calender control that uses the [daterangepicker](https://github.com/dangrossman/daterangepicker)
The control start and end datetime is formatted for the [DT/DATE_AND_TIME](https://infosys.beckhoff.com/content/1033/tcplccontrol/html/tcplcctrl_date_and_time.htm?id=1430897617053350049) PLC datatype.

![enter image description here](https://user-images.githubusercontent.com/75740551/101644076-1088a380-3a35-11eb-8ed6-85a417fe7cd2.png)

# Installation
Easiest way to install this package is inside your TwinCAT HMI Project. 
**Right click** References and click "Manage NuGet Packages.." then browse for the file and install it! 
![enter image description here](https://user-images.githubusercontent.com/75740551/101645035-32cef100-3a36-11eb-88f4-eeaccd3366d6.png)

# Configuration
Declare two variables in the PLC with the type

 - DT / DATE_AND_TIME

Then create a databinding with **TwoWay** databinding.

To change the binding mode, **Right Click** the symbol and chose **Edit symbol..**
![enter image description here](https://user-images.githubusercontent.com/75740551/101644297-4ded3100-3a35-11eb-88b7-ec03df8b6ee6.png)

