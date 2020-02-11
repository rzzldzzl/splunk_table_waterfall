# splunk_table_waterfall

This is an example Splunk waterfall visualization using a table with data bars.  Ex:
<img src="https://github.com/rzzldzzl/splunk_table_waterfall/raw/master/splunk_table_waterfall.png" width="80%"/>

In this example, the table id is ***waterfallTable*** and the field name used to render the data bar is ***Waterfall***.

The ***Waterfall*** field needs to contain the following values separated by '|'.  Example: ```66.42|24.04|#FF0000```
* Offset/padding expressed in percent
* Bar width expressed in percent
* Bar Color (hex color code)

Install by copying these files to directory ***$SPLUNK_HOME/etc/apps/splunk_table_waterfall*** and restart splunk.  Something like:
```
cd $SPLUNK_HOME/etc/apps
git clone https://github.com/rzzldzzl/splunk_table_waterfall.git
```
OR
```
wget https://github.com/rzzldzzl/splunk_table_waterfall/archive/master.zip
unzip -d $SPLUNK_HOME/etc/apps  master.zip
```
