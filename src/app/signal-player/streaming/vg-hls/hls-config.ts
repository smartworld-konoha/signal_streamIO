export interface IHLSConfig {
	abrController: Function
	defaultAudioCodec: string
	fLoader: Function
	fetchSetup: Function
	loader: Function
	pLoader: Function
	startLevel: number
	timelineController: Function
	xhrSetup: Function

	autoStartLoad: boolean
	startPosition: number
	capLevelToPlayerSize: boolean
	debug: boolean
	initialLiveManifestSize: number
	maxBufferLength: number
	maxMaxBufferLength: number
	maxBufferSize: number
	maxBufferHole: number
	maxSeekHole: number
	seekHoleNudgeDuration: number
	maxFragLookUpTolerance: number
	liveSyncDurationCount: number
	liveMaxLatencyDurationCount: number
	enableWorker: boolean
	enableSoftwareAES: boolean
	manifestLoadingTimeOut: number
	manifestLoadingMaxRetry: number
	manifestLoadingRetryDelay: number
	manifestLoadingMaxRetryTimeout: number
	levelLoadingTimeOut: number
	levelLoadingMaxRetry: number
	levelLoadingRetryDelay: number
	levelLoadingMaxRetryTimeout: number
	fragLoadingTimeOut: number
	fragLoadingMaxRetry: number
	fragLoadingRetryDelay: number
	fragLoadingMaxRetryTimeout: number
	startFragPrefech: boolean
	appendErrorMaxRetry: number
	enableCEA708Captions: boolean
	stretchShortVideoTrack: boolean
	forceKeyFrameOnDiscontinuity: boolean
	abrEwmaFastLive: number
	abrEwmaSlowLive: number
	abrEwmaFastVoD: number
	abrEwmaSlowVoD: number
	abrEwmaDefaultEstimate: number
	abrBandWidthFactor: number
	abrBandWidthUpFactor: number
	minAutoBitrate: number
}
