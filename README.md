# ui-janus
Janus app UI
git clone git@github.com:juankrlos3c/ui-janus.git
npm install -g react-native-cli

$ cd ui-janus
$ yarn

open xcode
- open the folder ui-janus/ios

------* Set up Xcode
$ sudo gem install cocoapods
$ brew install watchman
$ cd ui-janus/ios
$ pod install
$ cd ..
$ react-native run-ios

------* set up android
$ cd ~/
$ touch ~/.bash_profile;
$ open -e .bash_profile

$ brew tap AdoptOpenJDK/openjdk
$ brew cask install adoptopenjdk8

copy and paste this into the bash_profile
accept all licences

$ $ANDROID_HOME/tools/bin/sdkmanager --licenses

export ANDROID_HOME=$HOME/Library/Android/sdk 
export ANDROID_HOME=$HOME/Library/Android/sdk 
export PATH=$PATH:$ANDROID_HOME/emulator 
export PATH=$PATH:$ANDROID_HOME/tools 
export PATH=$PATH:$ANDROID_HOME/tools/bin 
export PATH=$PATH:$ANDROID_HOME/platform-tools
export ANDROID_SDK=/Users/jloresb/Library/Android/sdk
export PATH=/Users/jloresb/Library/Android/sdk/platform-tools:$PATH

- now open android studio and create a virtul device.

locate in /ui-janus and run $ react-native run-android
