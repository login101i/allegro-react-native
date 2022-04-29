<AwesomeAlert
	show={showAlert}
	showProgress={false}
	title="AwesomeAlert"
	message="I have a message for you!"
	closeOnTouchOutside={true}
	closeOnHardwareBackPress={false}
	showCancelButton={true}
	showConfirmButton={true}
	cancelText="No, cancel"
	confirmText="Yes, delete it"
	confirmButtonColor="#DD6B55"
	onCancelPressed={() => {
		setShowAlert(false);
	}}
	onConfirmPressed={() => {
		setShowAlert(false);
		onChangeImage(null);
	}}
/>;
