const sourceData = {
  "/slf4j-logkit/org/slf4j/implStaticLoggerBinder.java": {
    "coveredLines": 7,
    "totalLines": 78
  },
  "/slf4j-logkit/org/apache/jmeter/loggingLogkitLoggerAdapter.java": {
    "coveredLines": 137,
    "totalLines": 327
  },
  "/protocol/tcp/org/apache/jmeter/protocol/tcp/samplerAbstractTCPClient.java": {
    "coveredLines": 58,
    "totalLines": 79
  },
  "/protocol/tcp/org/apache/jmeter/protocol/tcp/samplerBinaryTCPClientImpl.java": {
    "coveredLines": 41,
    "totalLines": 144
  }
};
// const sourceData2 = {
//     "/slf4j-logkit/org/slf4j/implStaticLoggerBinder.java": {
//         "coveredLines": 7,
//         "totalLines": 78
//     },
//     "/slf4j-logkit/org/apache/jmeter/loggingLogkitLoggerAdapter.java": {
//         "coveredLines": 137,
//         "totalLines": 327
//     },
//     "/slf4j-logkit/org/apache/jmeter/loggingLogkitLoggerFactory.java": {
//         "coveredLines": 45,
//         "totalLines": 69
//     },
//     "/protocol/tcp/org/apache/jmeter/protocol/tcp/samplerAbstractTCPClient.java": {
//         "coveredLines": 58,
//         "totalLines": 79
//     },
//     "/protocol/tcp/org/apache/jmeter/protocol/tcp/samplerBinaryTCPClientImpl.java": {
//         "coveredLines": 41,
//         "totalLines": 144
//     },
//     "/protocol/tcp/org/apache/jmeter/protocol/tcp/samplerLengthPrefixedBinaryTCPClientImpl.java": {
//         "coveredLines": 41,
//         "totalLines": 121
//     },
//     "/protocol/tcp/org/apache/jmeter/protocol/tcp/samplerReadException.java": {
//         "coveredLines": 42,
//         "totalLines": 53
//     },
//     "/protocol/tcp/org/apache/jmeter/protocol/tcp/samplerTCPClient.java": {
//         "coveredLines": 66,
//         "totalLines": 96
//     },
//     "/protocol/tcp/org/apache/jmeter/protocol/tcp/samplerTCPClientDecorator.java": {
//         "coveredLines": 45,
//         "totalLines": 85
//     },
//     "/protocol/tcp/org/apache/jmeter/protocol/tcp/samplerTCPClientImpl.java": {
//         "coveredLines": 39,
//         "totalLines": 138
//     },
//     "/protocol/tcp/org/apache/jmeter/protocol/tcp/samplerTCPSampler.java": {
//         "coveredLines": 459,
//         "totalLines": 583
//     },
//     "/protocol/tcp/org/apache/jmeter/protocol/tcp/control/guiTCPSamplerGui.java": {
//         "coveredLines": 11,
//         "totalLines": 104
//     },
//     "/protocol/tcp/org/apache/jmeter/protocol/tcp/config/guiTCPConfigGui.java": {
//         "coveredLines": 220,
//         "totalLines": 261
//     },
//     "/protocol/native/org/apache/jmeter/protocol/systemNativeCommand.java": {
//         "coveredLines": 40,
//         "totalLines": 53
//     },
//     "/protocol/native/org/apache/jmeter/protocol/systemSystemSampler.java": {
//         "coveredLines": 192,
//         "totalLines": 331
//     },
//     "/protocol/native/org/apache/jmeter/protocol/system/guiSystemSamplerGui.java": {
//         "coveredLines": 61,
//         "totalLines": 282
//     },
//     "/protocol/mongodb/org/apache/jmeter/protocol/mongodb/samplerMongoScriptRunner.java": {
//         "coveredLines": 61,
//         "totalLines": 68
//     },
//     "/protocol/mongodb/org/apache/jmeter/protocol/mongodb/samplerMongoScriptSampler.java": {
//         "coveredLines": 109,
//         "totalLines": 144
//     },
//     "/protocol/mongodb/org/apache/jmeter/protocol/mongodb/samplerMongoScriptSamplerBeanInfo.java": {
//         "coveredLines": 55,
//         "totalLines": 74
//     },
//     "/protocol/mongodb/org/apache/jmeter/protocol/mongodb/mongoEvalResultHandler.java": {
//         "coveredLines": 15,
//         "totalLines": 67
//     },
//     "/protocol/mongodb/org/apache/jmeter/protocol/mongodb/mongoMongoDB.java": {
//         "coveredLines": 51,
//         "totalLines": 75
//     },
//     "/protocol/mongodb/org/apache/jmeter/protocol/mongodb/mongoMongoUtils.java": {
//         "coveredLines": 42,
//         "totalLines": 51
//     },
//     "/protocol/mongodb/org/apache/jmeter/protocol/mongodb/configMongoDBHolder.java": {
//         "coveredLines": 29,
//         "totalLines": 56
//     },
//     "/protocol/mongodb/org/apache/jmeter/protocol/mongodb/configMongoSourceElement.java": {
//         "coveredLines": 176,
//         "totalLines": 398
//     },
//     "/protocol/mongodb/org/apache/jmeter/protocol/mongodb/configMongoSourceElementBeanInfo.java": {
//         "coveredLines": 16,
//         "totalLines": 120
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/smtp/samplerSmtpSampler.java": {
//         "coveredLines": 261,
//         "totalLines": 393
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/smtp/sampler/toolsCounterOutputStream.java": {
//         "coveredLines": 23,
//         "totalLines": 64
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/smtp/sampler/protocolLocalTrustStoreSSLSocketFactory.java": {
//         "coveredLines": 82,
//         "totalLines": 136
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/smtp/sampler/protocolSendMailCommand.java": {
//         "coveredLines": 577,
//         "totalLines": 863
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/smtp/sampler/protocolSynchronousTransportListener.java": {
//         "coveredLines": 75,
//         "totalLines": 100
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/smtp/sampler/protocolTrustAllSSLSocketFactory.java": {
//         "coveredLines": 128,
//         "totalLines": 149
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/smtp/sampler/guiSecuritySettingsPanel.java": {
//         "coveredLines": 34,
//         "totalLines": 419
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/smtp/sampler/guiSmtpPanel.java": {
//         "coveredLines": 922,
//         "totalLines": 1165
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/smtp/sampler/guiSmtpSamplerGui.java": {
//         "coveredLines": 23,
//         "totalLines": 194
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/mail/samplerMailFileFolder.java": {
//         "coveredLines": 164,
//         "totalLines": 196
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/mail/samplerMailFileMessage.java": {
//         "coveredLines": 30,
//         "totalLines": 36
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/mail/samplerMailFileStore.java": {
//         "coveredLines": 17,
//         "totalLines": 59
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/mail/samplerMailReaderSampler.java": {
//         "coveredLines": 422,
//         "totalLines": 610
//     },
//     "/protocol/mail/org/apache/jmeter/protocol/mail/sampler/guiMailReaderSamplerGui.java": {
//         "coveredLines": 329,
//         "totalLines": 335
//     },
//     "/protocol/ldap/org/apache/jmeter/protocol/ldap/samplerLDAPExtSampler.java": {
//         "coveredLines": 476,
//         "totalLines": 1077
//     },
//     "/protocol/ldap/org/apache/jmeter/protocol/ldap/samplerLDAPSampler.java": {
//         "coveredLines": 170,
//         "totalLines": 493
//     },
//     "/protocol/ldap/org/apache/jmeter/protocol/ldap/samplerLdapClient.java": {
//         "coveredLines": 141,
//         "totalLines": 154
//     },
//     "/protocol/ldap/org/apache/jmeter/protocol/ldap/samplerLdapExtClient.java": {
//         "coveredLines": 133,
//         "totalLines": 285
//     },
//     "/protocol/ldap/org/apache/jmeter/protocol/ldap/control/guiLdapExtTestSamplerGui.java": {
//         "coveredLines": 107,
//         "totalLines": 110
//     },
//     "/protocol/ldap/org/apache/jmeter/protocol/ldap/control/guiLdapTestSamplerGui.java": {
//         "coveredLines": 69,
//         "totalLines": 109
//     },
//     "/protocol/ldap/org/apache/jmeter/protocol/ldap/config/guiLDAPArgument.java": {
//         "coveredLines": 30,
//         "totalLines": 178
//     },
//     "/protocol/ldap/org/apache/jmeter/protocol/ldap/config/guiLDAPArguments.java": {
//         "coveredLines": 85,
//         "totalLines": 265
//     },
//     "/protocol/ldap/org/apache/jmeter/protocol/ldap/config/guiLDAPArgumentsPanel.java": {
//         "coveredLines": 159,
//         "totalLines": 345
//     },
//     "/protocol/ldap/org/apache/jmeter/protocol/ldap/config/guiLdapConfigGui.java": {
//         "coveredLines": 13,
//         "totalLines": 425
//     },
//     "/protocol/ldap/org/apache/jmeter/protocol/ldap/config/guiLdapExtConfigGui.java": {
//         "coveredLines": 192,
//         "totalLines": 598
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jmsUtils.java": {
//         "coveredLines": 102,
//         "totalLines": 253
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/samplerBaseJMSSampler.java": {
//         "coveredLines": 256,
//         "totalLines": 379
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/samplerFixedQueueExecutor.java": {
//         "coveredLines": 61,
//         "totalLines": 113
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/samplerJMSProperties.java": {
//         "coveredLines": 135,
//         "totalLines": 247
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/samplerJMSProperty.java": {
//         "coveredLines": 24,
//         "totalLines": 171
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/samplerJMSSampler.java": {
//         "coveredLines": 327,
//         "totalLines": 561
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/samplerMessageAdmin.java": {
//         "coveredLines": 118,
//         "totalLines": 163
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/samplerPublisherSampler.java": {
//         "coveredLines": 365,
//         "totalLines": 591
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/samplerQueueExecutor.java": {
//         "coveredLines": 24,
//         "totalLines": 47
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/samplerReceiver.java": {
//         "coveredLines": 68,
//         "totalLines": 154
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/samplerSubscriberSampler.java": {
//         "coveredLines": 248,
//         "totalLines": 512
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/samplerTemporaryQueueExecutor.java": {
//         "coveredLines": 19,
//         "totalLines": 62
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/control/guiJMSPropertiesPanel.java": {
//         "coveredLines": 65,
//         "totalLines": 353
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/control/guiJMSPublisherGui.java": {
//         "coveredLines": 155,
//         "totalLines": 388
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/control/guiJMSSamplerGui.java": {
//         "coveredLines": 265,
//         "totalLines": 303
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/control/guiJMSSubscriberGui.java": {
//         "coveredLines": 54,
//         "totalLines": 286
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/clientClientPool.java": {
//         "coveredLines": 82,
//         "totalLines": 83
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/clientInitialContextFactory.java": {
//         "coveredLines": 59,
//         "totalLines": 174
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/clientPublisher.java": {
//         "coveredLines": 189,
//         "totalLines": 210
//     },
//     "/protocol/jms/org/apache/jmeter/protocol/jms/clientReceiveSubscriber.java": {
//         "coveredLines": 289,
//         "totalLines": 383
//     },
//     "/protocol/jdbc/org/apache/jmeter/protocol/jdbcAbstractJDBCTestElement.java": {
//         "coveredLines": 774,
//         "totalLines": 787
//     },
//     "/protocol/jdbc/org/apache/jmeter/protocol/jdbcJDBCTestElementBeanInfoSupport.java": {
//         "coveredLines": 29,
//         "totalLines": 106
//     },
//     "/protocol/jdbc/org/apache/jmeter/protocol/jdbc/samplerJDBCSampler.java": {
//         "coveredLines": 21,
//         "totalLines": 118
//     },
//     "/protocol/jdbc/org/apache/jmeter/protocol/jdbc/samplerJDBCSamplerBeanInfo.java": {
//         "coveredLines": 2,
//         "totalLines": 36
//     },
//     "/protocol/jdbc/org/apache/jmeter/protocol/jdbc/processorAbstractJDBCProcessor.java": {
//         "coveredLines": 45,
//         "totalLines": 62
//     },
//     "/protocol/jdbc/org/apache/jmeter/protocol/jdbc/processorJDBCPostProcessor.java": {
//         "coveredLines": 4,
//         "totalLines": 36
//     },
//     "/protocol/jdbc/org/apache/jmeter/protocol/jdbc/processorJDBCPostProcessorBeanInfo.java": {
//         "coveredLines": 26,
//         "totalLines": 36
//     },
//     "/protocol/jdbc/org/apache/jmeter/protocol/jdbc/processorJDBCPreProcessor.java": {
//         "coveredLines": 15,
//         "totalLines": 36
//     },
//     "/protocol/jdbc/org/apache/jmeter/protocol/jdbc/processorJDBCPreProcessorBeanInfo.java": {
//         "coveredLines": 6,
//         "totalLines": 36
//     },
//     "/protocol/jdbc/org/apache/jmeter/protocol/jdbc/configDataSourceElement.java": {
//         "coveredLines": 119,
//         "totalLines": 526
//     },
//     "/protocol/jdbc/org/apache/jmeter/protocol/jdbc/configDataSourceElementBeanInfo.java": {
//         "coveredLines": 57,
//         "totalLines": 135
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/testJavaTest.java": {
//         "coveredLines": 270,
//         "totalLines": 366
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/testSleepTest.java": {
//         "coveredLines": 23,
//         "totalLines": 236
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/samplerAbstractJavaSamplerClient.java": {
//         "coveredLines": 44,
//         "totalLines": 85
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/samplerBSFSampler.java": {
//         "coveredLines": 106,
//         "totalLines": 135
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/samplerBSFSamplerBeanInfo.java": {
//         "coveredLines": 24,
//         "totalLines": 31
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/samplerBeanShellSampler.java": {
//         "coveredLines": 116,
//         "totalLines": 187
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/samplerJSR223Sampler.java": {
//         "coveredLines": 81,
//         "totalLines": 91
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/samplerJSR223SamplerBeanInfo.java": {
//         "coveredLines": 26,
//         "totalLines": 28
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/samplerJavaSampler.java": {
//         "coveredLines": 257,
//         "totalLines": 347
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/samplerJavaSamplerClient.java": {
//         "coveredLines": 14,
//         "totalLines": 121
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/samplerJavaSamplerContext.java": {
//         "coveredLines": 1,
//         "totalLines": 226
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/control/guiBeanShellSamplerGui.java": {
//         "coveredLines": 105,
//         "totalLines": 175
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/control/guiJavaTestSamplerGui.java": {
//         "coveredLines": 74,
//         "totalLines": 99
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/configJavaConfig.java": {
//         "coveredLines": 11,
//         "totalLines": 120
//     },
//     "/protocol/java/org/apache/jmeter/protocol/java/config/guiJavaConfigGui.java": {
//         "coveredLines": 209,
//         "totalLines": 280
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/visualizersRequestViewHTTP.java": {
//         "coveredLines": 414,
//         "totalLines": 477
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilBase64Encoder.java": {
//         "coveredLines": 74,
//         "totalLines": 83
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilConversionUtils.java": {
//         "coveredLines": 66,
//         "totalLines": 277
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilDirectAccessByteArrayOutputStream.java": {
//         "coveredLines": 42,
//         "totalLines": 46
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilEncoderCache.java": {
//         "coveredLines": 37,
//         "totalLines": 77
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilHC4TrustAllSSLSocketFactory.java": {
//         "coveredLines": 29,
//         "totalLines": 100
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilHTTPArgument.java": {
//         "coveredLines": 248,
//         "totalLines": 267
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilHTTPConstants.java": {
//         "coveredLines": 22,
//         "totalLines": 29
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilHTTPConstantsInterface.java": {
//         "coveredLines": 62,
//         "totalLines": 90
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilHTTPFileArg.java": {
//         "coveredLines": 22,
//         "totalLines": 234
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilHTTPFileArgs.java": {
//         "coveredLines": 106,
//         "totalLines": 236
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilHTTPResultConverter.java": {
//         "coveredLines": 16,
//         "totalLines": 133
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilLoopbackHTTPSocket.java": {
//         "coveredLines": 4,
//         "totalLines": 97
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilLoopbackHttpClientSocketFactory.java": {
//         "coveredLines": 30,
//         "totalLines": 100
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilSlowHC4SSLSocketFactory.java": {
//         "coveredLines": 27,
//         "totalLines": 42
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilSlowHC4SocketFactory.java": {
//         "coveredLines": 45,
//         "totalLines": 56
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/utilSlowHttpClientSocketFactory.java": {
//         "coveredLines": 51,
//         "totalLines": 72
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/util/accesslogFilter.java": {
//         "coveredLines": 34,
//         "totalLines": 111
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/util/accesslogGenerator.java": {
//         "coveredLines": 104,
//         "totalLines": 138
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/util/accesslogLogFilter.java": {
//         "coveredLines": 348,
//         "totalLines": 435
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/util/accesslogLogParser.java": {
//         "coveredLines": 17,
//         "totalLines": 77
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/util/accesslogNVPair.java": {
//         "coveredLines": 19,
//         "totalLines": 84
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/util/accesslogOrderPreservingLogParser.java": {
//         "coveredLines": 12,
//         "totalLines": 46
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/util/accesslogSessionFilter.java": {
//         "coveredLines": 24,
//         "totalLines": 230
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/util/accesslogSharedTCLogParser.java": {
//         "coveredLines": 55,
//         "totalLines": 117
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/util/accesslogStandardGenerator.java": {
//         "coveredLines": 111,
//         "totalLines": 226
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/util/accesslogTCLogParser.java": {
//         "coveredLines": 78,
//         "totalLines": 572
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerAccessLogSampler.java": {
//         "coveredLines": 226,
//         "totalLines": 386
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerAccessLogSamplerBeanInfo.java": {
//         "coveredLines": 26,
//         "totalLines": 104
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerAjpSampler.java": {
//         "coveredLines": 344,
//         "totalLines": 523
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPAbstractImpl.java": {
//         "coveredLines": 233,
//         "totalLines": 566
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPFileImpl.java": {
//         "coveredLines": 76,
//         "totalLines": 107
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPHC3Impl.java": {
//         "coveredLines": 167,
//         "totalLines": 1143
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPHC4Impl.java": {
//         "coveredLines": 283,
//         "totalLines": 1566
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPHCAbstractImpl.java": {
//         "coveredLines": 55,
//         "totalLines": 168
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPJavaImpl.java": {
//         "coveredLines": 570,
//         "totalLines": 652
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPSampleResult.java": {
//         "coveredLines": 43,
//         "totalLines": 278
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPSampler.java": {
//         "coveredLines": 7,
//         "totalLines": 46
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPSampler2.java": {
//         "coveredLines": 4,
//         "totalLines": 88
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPSamplerBase.java": {
//         "coveredLines": 1197,
//         "totalLines": 2030
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPSamplerBaseBeanInfo.java": {
//         "coveredLines": 0,
//         "totalLines": 32
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPSamplerBaseConverter.java": {
//         "coveredLines": 6,
//         "totalLines": 77
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPSamplerFactory.java": {
//         "coveredLines": 100,
//         "totalLines": 108
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHTTPSamplerProxy.java": {
//         "coveredLines": 91,
//         "totalLines": 102
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHttpClientDefaultParameters.java": {
//         "coveredLines": 150,
//         "totalLines": 161
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerHttpWebdav.java": {
//         "coveredLines": 3,
//         "totalLines": 65
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerJMeterClientConnectionOperator.java": {
//         "coveredLines": 87,
//         "totalLines": 90
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerLazySchemeSocketFactory.java": {
//         "coveredLines": 97,
//         "totalLines": 123
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerMeasuringConnectionManager.java": {
//         "coveredLines": 227,
//         "totalLines": 295
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerPostWriter.java": {
//         "coveredLines": 302,
//         "totalLines": 462
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerPutWriter.java": {
//         "coveredLines": 40,
//         "totalLines": 112
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerResourcesDownloader.java": {
//         "coveredLines": 200,
//         "totalLines": 245
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/samplerSoapSampler.java": {
//         "coveredLines": 88,
//         "totalLines": 375
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxyAbstractSamplerCreator.java": {
//         "coveredLines": 27,
//         "totalLines": 158
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxyDaemon.java": {
//         "coveredLines": 37,
//         "totalLines": 163
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxyDefaultSamplerCreator.java": {
//         "coveredLines": 42,
//         "totalLines": 425
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxyFormCharSetFinder.java": {
//         "coveredLines": 72,
//         "totalLines": 86
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxyHttpReplyHdr.java": {
//         "coveredLines": 231,
//         "totalLines": 292
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxyHttpRequestHdr.java": {
//         "coveredLines": 213,
//         "totalLines": 442
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxyProxy.java": {
//         "coveredLines": 363,
//         "totalLines": 630
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxyProxyControl.java": {
//         "coveredLines": 140,
//         "totalLines": 1601
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxySamplerCreator.java": {
//         "coveredLines": 25,
//         "totalLines": 97
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxySamplerCreatorFactory.java": {
//         "coveredLines": 88,
//         "totalLines": 104
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxyServerAliasKeyManager.java": {
//         "coveredLines": 65,
//         "totalLines": 85
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/proxy/guiProxyControlGui.java": {
//         "coveredLines": 620,
//         "totalLines": 1002
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserBaseParser.java": {
//         "coveredLines": 39,
//         "totalLines": 100
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserCssParser.java": {
//         "coveredLines": 6,
//         "totalLines": 193
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserHTMLParseError.java": {
//         "coveredLines": 28,
//         "totalLines": 43
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserHTMLParseException.java": {
//         "coveredLines": 26,
//         "totalLines": 46
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserHTMLParser.java": {
//         "coveredLines": 12,
//         "totalLines": 220
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserHtmlParsingUtils.java": {
//         "coveredLines": 126,
//         "totalLines": 401
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserJTidyHTMLParser.java": {
//         "coveredLines": 126,
//         "totalLines": 244
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserJsoupBasedHtmlParser.java": {
//         "coveredLines": 77,
//         "totalLines": 155
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserLagartoBasedHtmlParser.java": {
//         "coveredLines": 189,
//         "totalLines": 232
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserLinkExtractorParseException.java": {
//         "coveredLines": 66,
//         "totalLines": 70
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserLinkExtractorParser.java": {
//         "coveredLines": 42,
//         "totalLines": 53
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserRegexpHTMLParser.java": {
//         "coveredLines": 97,
//         "totalLines": 196
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserURLCollection.java": {
//         "coveredLines": 5,
//         "totalLines": 134
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/parserURLString.java": {
//         "coveredLines": 29,
//         "totalLines": 77
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/modifierAnchorModifier.java": {
//         "coveredLines": 213,
//         "totalLines": 231
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/modifierRegExUserParameters.java": {
//         "coveredLines": 125,
//         "totalLines": 146
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/modifierURLRewritingModifier.java": {
//         "coveredLines": 233,
//         "totalLines": 238
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/modifierUserSequence.java": {
//         "coveredLines": 34,
//         "totalLines": 98
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/modifier/guiAnchorModifierGui.java": {
//         "coveredLines": 36,
//         "totalLines": 62
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/modifier/guiRegExUserParametersGui.java": {
//         "coveredLines": 77,
//         "totalLines": 165
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/modifier/guiURLRewritingModifierGui.java": {
//         "coveredLines": 80,
//         "totalLines": 143
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/guiAuthPanel.java": {
//         "coveredLines": 430,
//         "totalLines": 455
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/guiCacheManagerGui.java": {
//         "coveredLines": 64,
//         "totalLines": 139
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/guiCookiePanel.java": {
//         "coveredLines": 91,
//         "totalLines": 437
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/guiDNSCachePanel.java": {
//         "coveredLines": 241,
//         "totalLines": 324
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/guiHTTPArgumentsPanel.java": {
//         "coveredLines": 102,
//         "totalLines": 203
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/guiHTTPFileArgsPanel.java": {
//         "coveredLines": 334,
//         "totalLines": 402
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/guiHeaderPanel.java": {
//         "coveredLines": 106,
//         "totalLines": 397
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlAuthManager.java": {
//         "coveredLines": 344,
//         "totalLines": 544
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlAuthorization.java": {
//         "coveredLines": 106,
//         "totalLines": 136
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlCacheManager.java": {
//         "coveredLines": 397,
//         "totalLines": 518
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlCookie.java": {
//         "coveredLines": 25,
//         "totalLines": 271
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlCookieHandler.java": {
//         "coveredLines": 6,
//         "totalLines": 57
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlCookieManager.java": {
//         "coveredLines": 243,
//         "totalLines": 459
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlDNSCacheManager.java": {
//         "coveredLines": 250,
//         "totalLines": 263
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlFixedSPNegoScheme.java": {
//         "coveredLines": 51,
//         "totalLines": 70
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlFixedSPNegoSchemeFactory.java": {
//         "coveredLines": 35,
//         "totalLines": 46
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlHC3CookieHandler.java": {
//         "coveredLines": 28,
//         "totalLines": 215
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlHC4CookieHandler.java": {
//         "coveredLines": 130,
//         "totalLines": 253
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlHeader.java": {
//         "coveredLines": 77,
//         "totalLines": 111
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlHeaderManager.java": {
//         "coveredLines": 46,
//         "totalLines": 312
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlHttpMirrorControl.java": {
//         "coveredLines": 12,
//         "totalLines": 160
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlHttpMirrorServer.java": {
//         "coveredLines": 28,
//         "totalLines": 172
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlHttpMirrorThread.java": {
//         "coveredLines": 61,
//         "totalLines": 319
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlKerberosManager.java": {
//         "coveredLines": 61,
//         "totalLines": 146
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/controlRecordingController.java": {
//         "coveredLines": 25,
//         "totalLines": 26
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/control/guiAjpSamplerGui.java": {
//         "coveredLines": 13,
//         "totalLines": 51
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/control/guiHttpMirrorControlGui.java": {
//         "coveredLines": 31,
//         "totalLines": 212
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/control/guiHttpTestSampleGui.java": {
//         "coveredLines": 51,
//         "totalLines": 285
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/control/guiRecordController.java": {
//         "coveredLines": 57,
//         "totalLines": 102
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/control/guiSoapSamplerGui.java": {
//         "coveredLines": 89,
//         "totalLines": 177
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/configMultipartUrlConfig.java": {
//         "coveredLines": 116,
//         "totalLines": 164
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/config/guiHttpDefaultsGui.java": {
//         "coveredLines": 129,
//         "totalLines": 289
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/config/guiMultipartUrlConfigGui.java": {
//         "coveredLines": 44,
//         "totalLines": 110
//     },
//     "/protocol/http/org/apache/jmeter/protocol/http/config/guiUrlConfigGui.java": {
//         "coveredLines": 182,
//         "totalLines": 852
//     },
//     "/protocol/http/org/apache/http/impl/connJMeterPoolingClientConnectionManager.java": {
//         "coveredLines": 173,
//         "totalLines": 351
//     },
//     "/protocol/ftp/org/apache/jmeter/protocol/ftp/samplerFTPSampler.java": {
//         "coveredLines": 302,
//         "totalLines": 324
//     },
//     "/protocol/ftp/org/apache/jmeter/protocol/ftp/control/guiFtpTestSamplerGui.java": {
//         "coveredLines": 52,
//         "totalLines": 104
//     },
//     "/protocol/ftp/org/apache/jmeter/protocol/ftp/config/guiFtpConfigGui.java": {
//         "coveredLines": 137,
//         "totalLines": 244
//     },
//     "/monitor/model/org/apache/jmeter/monitor/parserConstants.java": {
//         "coveredLines": 87,
//         "totalLines": 93
//     },
//     "/monitor/model/org/apache/jmeter/monitor/parserMonitorHandler.java": {
//         "coveredLines": 109,
//         "totalLines": 364
//     },
//     "/monitor/model/org/apache/jmeter/monitor/parserParser.java": {
//         "coveredLines": 26,
//         "totalLines": 32
//     },
//     "/monitor/model/org/apache/jmeter/monitor/parserParserImpl.java": {
//         "coveredLines": 82,
//         "totalLines": 128
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelConnector.java": {
//         "coveredLines": 26,
//         "totalLines": 40
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelConnectorImpl.java": {
//         "coveredLines": 47,
//         "totalLines": 82
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelJvm.java": {
//         "coveredLines": 6,
//         "totalLines": 28
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelJvmImpl.java": {
//         "coveredLines": 45,
//         "totalLines": 47
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelMemory.java": {
//         "coveredLines": 8,
//         "totalLines": 41
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelMemoryImpl.java": {
//         "coveredLines": 36,
//         "totalLines": 70
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelObjectFactory.java": {
//         "coveredLines": 39,
//         "totalLines": 101
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelRequestInfo.java": {
//         "coveredLines": 5,
//         "totalLines": 51
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelRequestInfoImpl.java": {
//         "coveredLines": 71,
//         "totalLines": 106
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelStatus.java": {
//         "coveredLines": 6,
//         "totalLines": 37
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelStatusImpl.java": {
//         "coveredLines": 45,
//         "totalLines": 76
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelThreadInfo.java": {
//         "coveredLines": 41,
//         "totalLines": 47
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelThreadInfoImpl.java": {
//         "coveredLines": 90,
//         "totalLines": 94
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelWorker.java": {
//         "coveredLines": 47,
//         "totalLines": 67
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelWorkerImpl.java": {
//         "coveredLines": 40,
//         "totalLines": 152
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelWorkers.java": {
//         "coveredLines": 16,
//         "totalLines": 32
//     },
//     "/monitor/model/org/apache/jmeter/monitor/modelWorkersImpl.java": {
//         "coveredLines": 34,
//         "totalLines": 48
//     },
//     "/monitor/components/org/apache/jmeter/visualizersMonitorAccumModel.java": {
//         "coveredLines": 65,
//         "totalLines": 248
//     },
//     "/monitor/components/org/apache/jmeter/visualizersMonitorGraph.java": {
//         "coveredLines": 114,
//         "totalLines": 211
//     },
//     "/monitor/components/org/apache/jmeter/visualizersMonitorGuiListener.java": {
//         "coveredLines": 9,
//         "totalLines": 28
//     },
//     "/monitor/components/org/apache/jmeter/visualizersMonitorHealthPanel.java": {
//         "coveredLines": 30,
//         "totalLines": 150
//     },
//     "/monitor/components/org/apache/jmeter/visualizersMonitorHealthVisualizer.java": {
//         "coveredLines": 173,
//         "totalLines": 198
//     },
//     "/monitor/components/org/apache/jmeter/visualizersMonitorListener.java": {
//         "coveredLines": 21,
//         "totalLines": 26
//     },
//     "/monitor/components/org/apache/jmeter/visualizersMonitorModel.java": {
//         "coveredLines": 47,
//         "totalLines": 133
//     },
//     "/monitor/components/org/apache/jmeter/visualizersMonitorPerformancePanel.java": {
//         "coveredLines": 144,
//         "totalLines": 316
//     },
//     "/monitor/components/org/apache/jmeter/visualizersMonitorStats.java": {
//         "coveredLines": 158,
//         "totalLines": 185
//     },
//     "/monitor/components/org/apache/jmeter/visualizersMonitorTabPane.java": {
//         "coveredLines": 7,
//         "totalLines": 37
//     },
//     "/monitor/components/org/apache/jmeter/visualizersServerPanel.java": {
//         "coveredLines": 103,
//         "totalLines": 209
//     },
//     "/monitor/components/org/apache/jmeter/monitor/utilMemoryBenchmark.java": {
//         "coveredLines": 33,
//         "totalLines": 133
//     },
//     "/monitor/components/org/apache/jmeter/monitor/utilStats.java": {
//         "coveredLines": 80,
//         "totalLines": 196
//     },
//     "/junit/woolfelDummyTestCase.java": {
//         "coveredLines": 64,
//         "totalLines": 101
//     },
//     "/junit/woolfelSubDummyTest.java": {
//         "coveredLines": 28,
//         "totalLines": 40
//     },
//     "/junit/woolfelSubDummyTest2.java": {
//         "coveredLines": 31,
//         "totalLines": 41
//     },
//     "/junit/testAfterAnnotatedTest.java": {
//         "coveredLines": 19,
//         "totalLines": 39
//     },
//     "/junit/testBeforeAnnotatedTest.java": {
//         "coveredLines": 32,
//         "totalLines": 39
//     },
//     "/junit/testDummyAnnotatedTest.java": {
//         "coveredLines": 59,
//         "totalLines": 111
//     },
//     "/junit/testJunit4AnnotationsTest.java": {
//         "coveredLines": 21,
//         "totalLines": 55
//     },
//     "/junit/testRerunTest.java": {
//         "coveredLines": 6,
//         "totalLines": 36
//     },
//     "/junit/testSetupTestError.java": {
//         "coveredLines": 7,
//         "totalLines": 41
//     },
//     "/junit/testSetupTestFail.java": {
//         "coveredLines": 30,
//         "totalLines": 41
//     },
//     "/junit/testTearDownTestFail.java": {
//         "coveredLines": 22,
//         "totalLines": 36
//     },
//     "/junit/org/apache/jmeter/protocol/java/samplerJUnitSampler.java": {
//         "coveredLines": 32,
//         "totalLines": 721
//     },
//     "/junit/org/apache/jmeter/protocol/java/control/guiClassFilter.java": {
//         "coveredLines": 61,
//         "totalLines": 64
//     },
//     "/junit/org/apache/jmeter/protocol/java/control/guiJUnitTestSamplerGui.java": {
//         "coveredLines": 391,
//         "totalLines": 436
//     },
//     "/jorphan/org/apache/jorphan/utilConverter.java": {
//         "coveredLines": 344,
//         "totalLines": 585
//     },
//     "/jorphan/org/apache/jorphan/utilHeapDumper.java": {
//         "coveredLines": 93,
//         "totalLines": 204
//     },
//     "/jorphan/org/apache/jorphan/utilJMeterError.java": {
//         "coveredLines": 12,
//         "totalLines": 47
//     },
//     "/jorphan/org/apache/jorphan/utilJMeterException.java": {
//         "coveredLines": 30,
//         "totalLines": 46
//     },
//     "/jorphan/org/apache/jorphan/utilJMeterStopTestException.java": {
//         "coveredLines": 20,
//         "totalLines": 37
//     },
//     "/jorphan/org/apache/jorphan/utilJMeterStopTestNowException.java": {
//         "coveredLines": 34,
//         "totalLines": 37
//     },
//     "/jorphan/org/apache/jorphan/utilJMeterStopThreadException.java": {
//         "coveredLines": 3,
//         "totalLines": 45
//     },
//     "/jorphan/org/apache/jorphan/utilJOrphanUtils.java": {
//         "coveredLines": 73,
//         "totalLines": 619
//     },
//     "/jorphan/org/apache/jorphan/utilXMLBuffer.java": {
//         "coveredLines": 58,
//         "totalLines": 118
//     },
//     "/jorphan/org/apache/jorphan/testUnitTestManager.java": {
//         "coveredLines": 10,
//         "totalLines": 41
//     },
//     "/jorphan/org/apache/jorphan/reflectClassFilter.java": {
//         "coveredLines": 10,
//         "totalLines": 32
//     },
//     "/jorphan/org/apache/jorphan/reflectClassFinder.java": {
//         "coveredLines": 177,
//         "totalLines": 483
//     },
//     "/jorphan/org/apache/jorphan/reflectClassTools.java": {
//         "coveredLines": 8,
//         "totalLines": 123
//     },
//     "/jorphan/org/apache/jorphan/reflectFunctor.java": {
//         "coveredLines": 442,
//         "totalLines": 513
//     },
//     "/jorphan/org/apache/jorphan/mathNumberComparator.java": {
//         "coveredLines": 40,
//         "totalLines": 47
//     },
//     "/jorphan/org/apache/jorphan/mathStatCalculator.java": {
//         "coveredLines": 228,
//         "totalLines": 294
//     },
//     "/jorphan/org/apache/jorphan/mathStatCalculatorInteger.java": {
//         "coveredLines": 25,
//         "totalLines": 53
//     },
//     "/jorphan/org/apache/jorphan/mathStatCalculatorLong.java": {
//         "coveredLines": 10,
//         "totalLines": 58
//     },
//     "/jorphan/org/apache/jorphan/loggingLoggingManager.java": {
//         "coveredLines": 231,
//         "totalLines": 366
//     },
//     "/jorphan/org/apache/jorphan/ioTextFile.java": {
//         "coveredLines": 26,
//         "totalLines": 209
//     },
//     "/jorphan/org/apache/jorphan/guiAbstractTreeTableModel.java": {
//         "coveredLines": 43,
//         "totalLines": 224
//     },
//     "/jorphan/org/apache/jorphan/guiComponentUtil.java": {
//         "coveredLines": 39,
//         "totalLines": 95
//     },
//     "/jorphan/org/apache/jorphan/guiDefaultTreeTableModel.java": {
//         "coveredLines": 16,
//         "totalLines": 52
//     },
//     "/jorphan/org/apache/jorphan/guiGuiUtils.java": {
//         "coveredLines": 85,
//         "totalLines": 163
//     },
//     "/jorphan/org/apache/jorphan/guiJLabeledChoice.java": {
//         "coveredLines": 134,
//         "totalLines": 320
//     },
//     "/jorphan/org/apache/jorphan/guiJLabeledField.java": {
//         "coveredLines": 26,
//         "totalLines": 39
//     },
//     "/jorphan/org/apache/jorphan/guiJLabeledPasswordField.java": {
//         "coveredLines": 11,
//         "totalLines": 49
//     },
//     "/jorphan/org/apache/jorphan/guiJLabeledTextArea.java": {
//         "coveredLines": 41,
//         "totalLines": 267
//     },
//     "/jorphan/org/apache/jorphan/guiJLabeledTextField.java": {
//         "coveredLines": 235,
//         "totalLines": 248
//     },
//     "/jorphan/org/apache/jorphan/guiJTreeTable.java": {
//         "coveredLines": 25,
//         "totalLines": 67
//     },
//     "/jorphan/org/apache/jorphan/guiMenuScroller.java": {
//         "coveredLines": 291,
//         "totalLines": 701
//     },
//     "/jorphan/org/apache/jorphan/guiNumberRenderer.java": {
//         "coveredLines": 9,
//         "totalLines": 51
//     },
//     "/jorphan/org/apache/jorphan/guiObjectTableModel.java": {
//         "coveredLines": 131,
//         "totalLines": 306
//     },
//     "/jorphan/org/apache/jorphan/guiRateRenderer.java": {
//         "coveredLines": 11,
//         "totalLines": 65
//     },
//     "/jorphan/org/apache/jorphan/guiRendererUtils.java": {
//         "coveredLines": 32,
//         "totalLines": 41
//     },
//     "/jorphan/org/apache/jorphan/guiRightAlignRenderer.java": {
//         "coveredLines": 19,
//         "totalLines": 34
//     },
//     "/jorphan/org/apache/jorphan/guiTreeTableModel.java": {
//         "coveredLines": 16,
//         "totalLines": 66
//     },
//     "/jorphan/org/apache/jorphan/gui/layoutVerticalLayout.java": {
//         "coveredLines": 170,
//         "totalLines": 244
//     },
//     "/jorphan/org/apache/jorphan/execKeyToolUtils.java": {
//         "coveredLines": 79,
//         "totalLines": 449
//     },
//     "/jorphan/org/apache/jorphan/execStreamCopier.java": {
//         "coveredLines": 9,
//         "totalLines": 72
//     },
//     "/jorphan/org/apache/jorphan/execStreamGobbler.java": {
//         "coveredLines": 44,
//         "totalLines": 73
//     },
//     "/jorphan/org/apache/jorphan/execSystemCommand.java": {
//         "coveredLines": 220,
//         "totalLines": 256
//     },
//     "/jorphan/org/apache/jorphan/collectionsData.java": {
//         "coveredLines": 354,
//         "totalLines": 689
//     },
//     "/jorphan/org/apache/jorphan/collectionsHashTree.java": {
//         "coveredLines": 111,
//         "totalLines": 1101
//     },
//     "/jorphan/org/apache/jorphan/collectionsHashTreeTraverser.java": {
//         "coveredLines": 75,
//         "totalLines": 76
//     },
//     "/jorphan/org/apache/jorphan/collectionsListedHashTree.java": {
//         "coveredLines": 33,
//         "totalLines": 225
//     },
//     "/jorphan/org/apache/jorphan/collectionsSearchByClass.java": {
//         "coveredLines": 78,
//         "totalLines": 117
//     },
//     "/jorphan/org/apache/jorphan/collectionsSortedHashTree.java": {
//         "coveredLines": 67,
//         "totalLines": 109
//     },
//     "/jorphan/org/apache/commons/cli/avalonAbstractParserControl.java": {
//         "coveredLines": 9,
//         "totalLines": 40
//     },
//     "/jorphan/org/apache/commons/cli/avalonCLArgsParser.java": {
//         "coveredLines": 290,
//         "totalLines": 674
//     },
//     "/jorphan/org/apache/commons/cli/avalonCLOption.java": {
//         "coveredLines": 43,
//         "totalLines": 174
//     },
//     "/jorphan/org/apache/commons/cli/avalonCLOptionDescriptor.java": {
//         "coveredLines": 42,
//         "totalLines": 199
//     },
//     "/jorphan/org/apache/commons/cli/avalonCLUtil.java": {
//         "coveredLines": 102,
//         "totalLines": 106
//     },
//     "/jorphan/org/apache/commons/cli/avalonParserControl.java": {
//         "coveredLines": 4,
//         "totalLines": 36
//     },
//     "/jorphan/org/apache/commons/cli/avalonToken.java": {
//         "coveredLines": 50,
//         "totalLines": 78
//     },
//     "/functions/org/apache/jmeter/functionsAbstractHostIPName.java": {
//         "coveredLines": 7,
//         "totalLines": 84
//     },
//     "/functions/org/apache/jmeter/functionsBeanShell.java": {
//         "coveredLines": 133,
//         "totalLines": 153
//     },
//     "/functions/org/apache/jmeter/functionsCSVRead.java": {
//         "coveredLines": 101,
//         "totalLines": 162
//     },
//     "/functions/org/apache/jmeter/functionsCharFunction.java": {
//         "coveredLines": 86,
//         "totalLines": 91
//     },
//     "/functions/org/apache/jmeter/functionsEscapeHtml.java": {
//         "coveredLines": 82,
//         "totalLines": 93
//     },
//     "/functions/org/apache/jmeter/functionsEscapeOroRegexpChars.java": {
//         "coveredLines": 95,
//         "totalLines": 113
//     },
//     "/functions/org/apache/jmeter/functionsEvalFunction.java": {
//         "coveredLines": 63,
//         "totalLines": 85
//     },
//     "/functions/org/apache/jmeter/functionsEvalVarFunction.java": {
//         "coveredLines": 29,
//         "totalLines": 96
//     },
//     "/functions/org/apache/jmeter/functionsFileRowColContainer.java": {
//         "coveredLines": 0,
//         "totalLines": 188
//     },
//     "/functions/org/apache/jmeter/functionsFileToString.java": {
//         "coveredLines": 46,
//         "totalLines": 143
//     },
//     "/functions/org/apache/jmeter/functionsFileWrapper.java": {
//         "coveredLines": 177,
//         "totalLines": 208
//     },
//     "/functions/org/apache/jmeter/functionsGroovy.java": {
//         "coveredLines": 20,
//         "totalLines": 187
//     },
//     "/functions/org/apache/jmeter/functionsIntSum.java": {
//         "coveredLines": 96,
//         "totalLines": 106
//     },
//     "/functions/org/apache/jmeter/functionsIterationCounter.java": {
//         "coveredLines": 59,
//         "totalLines": 122
//     },
//     "/functions/org/apache/jmeter/functionsJavaScript.java": {
//         "coveredLines": 19,
//         "totalLines": 218
//     },
//     "/functions/org/apache/jmeter/functionsJexl2Function.java": {
//         "coveredLines": 112,
//         "totalLines": 162
//     },
//     "/functions/org/apache/jmeter/functionsJexl3Function.java": {
//         "coveredLines": 61,
//         "totalLines": 196
//     },
//     "/functions/org/apache/jmeter/functionsLogFunction.java": {
//         "coveredLines": 115,
//         "totalLines": 182
//     },
//     "/functions/org/apache/jmeter/functionsLogFunction2.java": {
//         "coveredLines": 10,
//         "totalLines": 117
//     },
//     "/functions/org/apache/jmeter/functionsLongSum.java": {
//         "coveredLines": 25,
//         "totalLines": 106
//     },
//     "/functions/org/apache/jmeter/functionsMachineIP.java": {
//         "coveredLines": 16,
//         "totalLines": 44
//     },
//     "/functions/org/apache/jmeter/functionsMachineName.java": {
//         "coveredLines": 33,
//         "totalLines": 44
//     },
//     "/functions/org/apache/jmeter/functionsProperty.java": {
//         "coveredLines": 101,
//         "totalLines": 108
//     },
//     "/functions/org/apache/jmeter/functionsProperty2.java": {
//         "coveredLines": 4,
//         "totalLines": 106
//     },
//     "/functions/org/apache/jmeter/functionsRandom.java": {
//         "coveredLines": 101,
//         "totalLines": 109
//     },
//     "/functions/org/apache/jmeter/functionsRandomFromMultipleVars.java": {
//         "coveredLines": 67,
//         "totalLines": 153
//     },
//     "/functions/org/apache/jmeter/functionsRandomString.java": {
//         "coveredLines": 31,
//         "totalLines": 131
//     },
//     "/functions/org/apache/jmeter/functionsRegexFunction.java": {
//         "coveredLines": 155,
//         "totalLines": 286
//     },
//     "/functions/org/apache/jmeter/functionsSamplerName.java": {
//         "coveredLines": 81,
//         "totalLines": 88
//     },
//     "/functions/org/apache/jmeter/functionsSetProperty.java": {
//         "coveredLines": 17,
//         "totalLines": 105
//     },
//     "/functions/org/apache/jmeter/functionsSplitFunction.java": {
//         "coveredLines": 13,
//         "totalLines": 129
//     },
//     "/functions/org/apache/jmeter/functionsStringFromFile.java": {
//         "coveredLines": 242,
//         "totalLines": 339
//     },
//     "/functions/org/apache/jmeter/functionsTestPlanName.java": {
//         "coveredLines": 57,
//         "totalLines": 71
//     },
//     "/functions/org/apache/jmeter/functionsThreadNumber.java": {
//         "coveredLines": 18,
//         "totalLines": 63
//     },
//     "/functions/org/apache/jmeter/functionsTimeFunction.java": {
//         "coveredLines": 81,
//         "totalLines": 139
//     },
//     "/functions/org/apache/jmeter/functionsUnEscape.java": {
//         "coveredLines": 65,
//         "totalLines": 83
//     },
//     "/functions/org/apache/jmeter/functionsUnEscapeHtml.java": {
//         "coveredLines": 87,
//         "totalLines": 89
//     },
//     "/functions/org/apache/jmeter/functionsUrlDecode.java": {
//         "coveredLines": 34,
//         "totalLines": 88
//     },
//     "/functions/org/apache/jmeter/functionsUrlEncode.java": {
//         "coveredLines": 8,
//         "totalLines": 88
//     },
//     "/functions/org/apache/jmeter/functionsUuid.java": {
//         "coveredLines": 44,
//         "totalLines": 69
//     },
//     "/functions/org/apache/jmeter/functionsVariable.java": {
//         "coveredLines": 55,
//         "totalLines": 90
//     },
//     "/functions/org/apache/jmeter/functionsXPath.java": {
//         "coveredLines": 1,
//         "totalLines": 126
//     },
//     "/functions/org/apache/jmeter/functionsXPathFileContainer.java": {
//         "coveredLines": 27,
//         "totalLines": 124
//     },
//     "/functions/org/apache/jmeter/functionsXPathWrapper.java": {
//         "coveredLines": 60,
//         "totalLines": 127
//     },
//     "/examples/org/apache/jmeter/examples/testbeans/example3Example3.java": {
//         "coveredLines": 118,
//         "totalLines": 157
//     },
//     "/examples/org/apache/jmeter/examples/testbeans/example3Example3BeanInfo.java": {
//         "coveredLines": 13,
//         "totalLines": 57
//     },
//     "/examples/org/apache/jmeter/examples/testbeans/example2Example2.java": {
//         "coveredLines": 53,
//         "totalLines": 64
//     },
//     "/examples/org/apache/jmeter/examples/testbeans/example2Example2BeanInfo.java": {
//         "coveredLines": 13,
//         "totalLines": 28
//     },
//     "/examples/org/apache/jmeter/examples/testbeans/example1Example1.java": {
//         "coveredLines": 9,
//         "totalLines": 62
//     },
//     "/examples/org/apache/jmeter/examples/samplerExampleSampler.java": {
//         "coveredLines": 6,
//         "totalLines": 128
//     },
//     "/examples/org/apache/jmeter/examples/sampler/guiExampleSamplerGui.java": {
//         "coveredLines": 33,
//         "totalLines": 134
//     },
//     "/core/org/apache/jmeterDynamicClassLoader.java": {
//         "coveredLines": 23,
//         "totalLines": 65
//     },
//     "/core/org/apache/jmeterJMeter.java": {
//         "coveredLines": 293,
//         "totalLines": 1337
//     },
//     "/core/org/apache/jmeterNewDriver.java": {
//         "coveredLines": 144,
//         "totalLines": 265
//     },
//     "/core/org/apache/jmeterProxyAuthenticator.java": {
//         "coveredLines": 68,
//         "totalLines": 70
//     },
//     "/core/org/apache/jmeter/visualizersCachingStatCalculator.java": {
//         "coveredLines": 60,
//         "totalLines": 66
//     },
//     "/core/org/apache/jmeter/visualizersImageVisualizer.java": {
//         "coveredLines": 23,
//         "totalLines": 30
//     },
//     "/core/org/apache/jmeter/visualizersPrintable.java": {
//         "coveredLines": 16,
//         "totalLines": 30
//     },
//     "/core/org/apache/jmeter/visualizersRunningSample.java": {
//         "coveredLines": 227,
//         "totalLines": 375
//     },
//     "/core/org/apache/jmeter/visualizersSample.java": {
//         "coveredLines": 161,
//         "totalLines": 218
//     },
//     "/core/org/apache/jmeter/visualizersSamplingStatCalculator.java": {
//         "coveredLines": 216,
//         "totalLines": 322
//     },
//     "/core/org/apache/jmeter/visualizersTableSample.java": {
//         "coveredLines": 32,
//         "totalLines": 164
//     },
//     "/core/org/apache/jmeter/visualizersVisualizer.java": {
//         "coveredLines": 8,
//         "totalLines": 48
//     },
//     "/core/org/apache/jmeter/visualizers/guiAbstractListenerGui.java": {
//         "coveredLines": 61,
//         "totalLines": 66
//     },
//     "/core/org/apache/jmeter/visualizers/guiAbstractVisualizer.java": {
//         "coveredLines": 268,
//         "totalLines": 359
//     },
//     "/core/org/apache/jmeter/utilBSFBeanInfoSupport.java": {
//         "coveredLines": 5,
//         "totalLines": 47
//     },
//     "/core/org/apache/jmeter/utilBSFJavaScriptEngine.java": {
//         "coveredLines": 129,
//         "totalLines": 245
//     },
//     "/core/org/apache/jmeter/utilBSFTestElement.java": {
//         "coveredLines": 83,
//         "totalLines": 133
//     },
//     "/core/org/apache/jmeter/utilBeanShellBeanInfoSupport.java": {
//         "coveredLines": 8,
//         "totalLines": 64
//     },
//     "/core/org/apache/jmeter/utilBeanShellClient.java": {
//         "coveredLines": 4,
//         "totalLines": 115
//     },
//     "/core/org/apache/jmeter/utilBeanShellInterpreter.java": {
//         "coveredLines": 128,
//         "totalLines": 213
//     },
//     "/core/org/apache/jmeter/utilBeanShellServer.java": {
//         "coveredLines": 37,
//         "totalLines": 111
//     },
//     "/core/org/apache/jmeter/utilBeanShellTestElement.java": {
//         "coveredLines": 254,
//         "totalLines": 281
//     },
//     "/core/org/apache/jmeter/utilCPSPauser.java": {
//         "coveredLines": 50,
//         "totalLines": 60
//     },
//     "/core/org/apache/jmeter/utilCalculator.java": {
//         "coveredLines": 21,
//         "totalLines": 267
//     },
//     "/core/org/apache/jmeter/utilColorHelper.java": {
//         "coveredLines": 62,
//         "totalLines": 66
//     },
//     "/core/org/apache/jmeter/utilCustomX509TrustManager.java": {
//         "coveredLines": 79,
//         "totalLines": 103
//     },
//     "/core/org/apache/jmeter/utilDocument.java": {
//         "coveredLines": 17,
//         "totalLines": 86
//     },
//     "/core/org/apache/jmeter/utilHostNameSetter.java": {
//         "coveredLines": 52,
//         "totalLines": 103
//     },
//     "/core/org/apache/jmeter/utilHttpSSLProtocolSocketFactory.java": {
//         "coveredLines": 212,
//         "totalLines": 267
//     },
//     "/core/org/apache/jmeter/utilJMeterTreeNodeTransferable.java": {
//         "coveredLines": 8,
//         "totalLines": 97
//     },
//     "/core/org/apache/jmeter/utilJMeterUtils.java": {
//         "coveredLines": 354,
//         "totalLines": 1458
//     },
//     "/core/org/apache/jmeter/utilJMeterVersion.java": {
//         "coveredLines": 30,
//         "totalLines": 106
//     },
//     "/core/org/apache/jmeter/utilJSR223BeanInfoSupport.java": {
//         "coveredLines": 70,
//         "totalLines": 81
//     },
//     "/core/org/apache/jmeter/utilJSR223TestElement.java": {
//         "coveredLines": 12,
//         "totalLines": 291
//     },
//     "/core/org/apache/jmeter/utilJsseSSLManager.java": {
//         "coveredLines": 49,
//         "totalLines": 419
//     },
//     "/core/org/apache/jmeter/utilLocaleChangeEvent.java": {
//         "coveredLines": 6,
//         "totalLines": 45
//     },
//     "/core/org/apache/jmeter/utilLocaleChangeListener.java": {
//         "coveredLines": 14,
//         "totalLines": 23
//     },
//     "/core/org/apache/jmeter/utilNameUpdater.java": {
//         "coveredLines": 105,
//         "totalLines": 190
//     },
//     "/core/org/apache/jmeter/utilNamedObject.java": {
//         "coveredLines": 4,
//         "totalLines": 24
//     },
//     "/core/org/apache/jmeter/utilPropertiesBasedPrefixResolver.java": {
//         "coveredLines": 1,
//         "totalLines": 99
//     },
//     "/core/org/apache/jmeter/utilSSLManager.java": {
//         "coveredLines": 26,
//         "totalLines": 299
//     },
//     "/core/org/apache/jmeter/utilScopePanel.java": {
//         "coveredLines": 171,
//         "totalLines": 182
//     },
//     "/core/org/apache/jmeter/utilScriptingBeanInfoSupport.java": {
//         "coveredLines": 17,
//         "totalLines": 214
//     },
//     "/core/org/apache/jmeter/utilScriptingTestElement.java": {
//         "coveredLines": 31,
//         "totalLines": 87
//     },
//     "/core/org/apache/jmeter/utilShutdownClient.java": {
//         "coveredLines": 14,
//         "totalLines": 49
//     },
//     "/core/org/apache/jmeter/utilSlowInputStream.java": {
//         "coveredLines": 8,
//         "totalLines": 56
//     },
//     "/core/org/apache/jmeter/utilSlowOutputStream.java": {
//         "coveredLines": 15,
//         "totalLines": 55
//     },
//     "/core/org/apache/jmeter/utilSlowSSLSocket.java": {
//         "coveredLines": 1,
//         "totalLines": 361
//     },
//     "/core/org/apache/jmeter/utilSlowSocket.java": {
//         "coveredLines": 120,
//         "totalLines": 127
//     },
//     "/core/org/apache/jmeter/utilStringUtilities.java": {
//         "coveredLines": 22,
//         "totalLines": 53
//     },
//     "/core/org/apache/jmeter/utilTidyException.java": {
//         "coveredLines": 5,
//         "totalLines": 35
//     },
//     "/core/org/apache/jmeter/utilXPathUtil.java": {
//         "coveredLines": 360,
//         "totalLines": 452
//     },
//     "/core/org/apache/jmeter/util/keystoreJmeterKeyStore.java": {
//         "coveredLines": 231,
//         "totalLines": 319
//     },
//     "/core/org/apache/jmeter/timersModifiableTimer.java": {
//         "coveredLines": 3,
//         "totalLines": 32
//     },
//     "/core/org/apache/jmeter/timersTimer.java": {
//         "coveredLines": 16,
//         "totalLines": 36
//     },
//     "/core/org/apache/jmeter/timers/guiAbstractTimerGui.java": {
//         "coveredLines": 31,
//         "totalLines": 66
//     },
//     "/core/org/apache/jmeter/threadsAbstractThreadGroup.java": {
//         "coveredLines": 100,
//         "totalLines": 261
//     },
//     "/core/org/apache/jmeter/threadsFindTestElementsUpToRootTraverser.java": {
//         "coveredLines": 19,
//         "totalLines": 103
//     },
//     "/core/org/apache/jmeter/threadsJMeterContext.java": {
//         "coveredLines": 36,
//         "totalLines": 201
//     },
//     "/core/org/apache/jmeter/threadsJMeterContextService.java": {
//         "coveredLines": 143,
//         "totalLines": 181
//     },
//     "/core/org/apache/jmeter/threadsJMeterThread.java": {
//         "coveredLines": 635,
//         "totalLines": 981
//     },
//     "/core/org/apache/jmeter/threadsJMeterThreadMonitor.java": {
//         "coveredLines": 24,
//         "totalLines": 26
//     },
//     "/core/org/apache/jmeter/threadsJMeterVariables.java": {
//         "coveredLines": 74,
//         "totalLines": 151
//     },
//     "/core/org/apache/jmeter/threadsListenerNotifier.java": {
//         "coveredLines": 32,
//         "totalLines": 75
//     },
//     "/core/org/apache/jmeter/threadsPostThreadGroup.java": {
//         "coveredLines": 0,
//         "totalLines": 28
//     },
//     "/core/org/apache/jmeter/threadsRemoteThreadsLifeCycleListener.java": {
//         "coveredLines": 17,
//         "totalLines": 38
//     },
//     "/core/org/apache/jmeter/threadsRemoteThreadsListener.java": {
//         "coveredLines": 7,
//         "totalLines": 40
//     },
//     "/core/org/apache/jmeter/threadsRemoteThreadsListenerImpl.java": {
//         "coveredLines": 8,
//         "totalLines": 115
//     },
//     "/core/org/apache/jmeter/threadsRemoteThreadsListenerTestElement.java": {
//         "coveredLines": 20,
//         "totalLines": 43
//     },
//     "/core/org/apache/jmeter/threadsRemoteThreadsListenerWrapper.java": {
//         "coveredLines": 39,
//         "totalLines": 66
//     },
//     "/core/org/apache/jmeter/threadsSamplePackage.java": {
//         "coveredLines": 32,
//         "totalLines": 230
//     },
//     "/core/org/apache/jmeter/threadsSetupThreadGroup.java": {
//         "coveredLines": 28,
//         "totalLines": 33
//     },
//     "/core/org/apache/jmeter/threadsTestCompiler.java": {
//         "coveredLines": 78,
//         "totalLines": 322
//     },
//     "/core/org/apache/jmeter/threadsTestCompilerHelper.java": {
//         "coveredLines": 29,
//         "totalLines": 48
//     },
//     "/core/org/apache/jmeter/threadsThreadGroup.java": {
//         "coveredLines": 241,
//         "totalLines": 604
//     },
//     "/core/org/apache/jmeter/threads/guiAbstractThreadGroupGui.java": {
//         "coveredLines": 54,
//         "totalLines": 211
//     },
//     "/core/org/apache/jmeter/threads/guiPostThreadGroupGui.java": {
//         "coveredLines": 24,
//         "totalLines": 45
//     },
//     "/core/org/apache/jmeter/threads/guiSetupThreadGroupGui.java": {
//         "coveredLines": 28,
//         "totalLines": 45
//     },
//     "/core/org/apache/jmeter/threads/guiThreadGroupGui.java": {
//         "coveredLines": 2,
//         "totalLines": 306
//     },
//     "/core/org/apache/jmeter/testelementAbstractScopedAssertion.java": {
//         "coveredLines": 40,
//         "totalLines": 49
//     },
//     "/core/org/apache/jmeter/testelementAbstractScopedTestElement.java": {
//         "coveredLines": 38,
//         "totalLines": 166
//     },
//     "/core/org/apache/jmeter/testelementAbstractTestElement.java": {
//         "coveredLines": 497,
//         "totalLines": 664
//     },
//     "/core/org/apache/jmeter/testelementAbstractTestElementBeanInfo.java": {
//         "coveredLines": 100,
//         "totalLines": 104
//     },
//     "/core/org/apache/jmeter/testelementOnErrorTestElement.java": {
//         "coveredLines": 66,
//         "totalLines": 78
//     },
//     "/core/org/apache/jmeter/testelementTestCloneable.java": {
//         "coveredLines": 1,
//         "totalLines": 26
//     },
//     "/core/org/apache/jmeter/testelementTestElement.java": {
//         "coveredLines": 152,
//         "totalLines": 335
//     },
//     "/core/org/apache/jmeter/testelementTestElementTraverser.java": {
//         "coveredLines": 20,
//         "totalLines": 61
//     },
//     "/core/org/apache/jmeter/testelementTestIterationListener.java": {
//         "coveredLines": 3,
//         "totalLines": 35
//     },
//     "/core/org/apache/jmeter/testelementTestListener.java": {
//         "coveredLines": 1,
//         "totalLines": 29
//     },
//     "/core/org/apache/jmeter/testelementTestPlan.java": {
//         "coveredLines": 45,
//         "totalLines": 273
//     },
//     "/core/org/apache/jmeter/testelementTestStateListener.java": {
//         "coveredLines": 43,
//         "totalLines": 102
//     },
//     "/core/org/apache/jmeter/testelementThreadListener.java": {
//         "coveredLines": 13,
//         "totalLines": 44
//     },
//     "/core/org/apache/jmeter/testelementVariablesCollection.java": {
//         "coveredLines": 28,
//         "totalLines": 44
//     },
//     "/core/org/apache/jmeter/testelementWorkBench.java": {
//         "coveredLines": 16,
//         "totalLines": 40
//     },
//     "/core/org/apache/jmeter/testelement/propertyAbstractProperty.java": {
//         "coveredLines": 128,
//         "totalLines": 418
//     },
//     "/core/org/apache/jmeter/testelement/propertyBooleanProperty.java": {
//         "coveredLines": 49,
//         "totalLines": 99
//     },
//     "/core/org/apache/jmeter/testelement/propertyCollectionProperty.java": {
//         "coveredLines": 33,
//         "totalLines": 218
//     },
//     "/core/org/apache/jmeter/testelement/propertyDoubleProperty.java": {
//         "coveredLines": 117,
//         "totalLines": 143
//     },
//     "/core/org/apache/jmeter/testelement/propertyFloatProperty.java": {
//         "coveredLines": 131,
//         "totalLines": 143
//     },
//     "/core/org/apache/jmeter/testelement/propertyFunctionProperty.java": {
//         "coveredLines": 130,
//         "totalLines": 131
//     },
//     "/core/org/apache/jmeter/testelement/propertyIntegerProperty.java": {
//         "coveredLines": 131,
//         "totalLines": 148
//     },
//     "/core/org/apache/jmeter/testelement/propertyJMeterProperty.java": {
//         "coveredLines": 92,
//         "totalLines": 96
//     },
//     "/core/org/apache/jmeter/testelement/propertyLongProperty.java": {
//         "coveredLines": 90,
//         "totalLines": 144
//     },
//     "/core/org/apache/jmeter/testelement/propertyMapProperty.java": {
//         "coveredLines": 76,
//         "totalLines": 177
//     },
//     "/core/org/apache/jmeter/testelement/propertyMultiProperty.java": {
//         "coveredLines": 31,
//         "totalLines": 95
//     },
//     "/core/org/apache/jmeter/testelement/propertyNullProperty.java": {
//         "coveredLines": 53,
//         "totalLines": 133
//     },
//     "/core/org/apache/jmeter/testelement/propertyNumberProperty.java": {
//         "coveredLines": 33,
//         "totalLines": 72
//     },
//     "/core/org/apache/jmeter/testelement/propertyObjectProperty.java": {
//         "coveredLines": 5,
//         "totalLines": 123
//     },
//     "/core/org/apache/jmeter/testelement/propertyPropertyIterator.java": {
//         "coveredLines": 10,
//         "totalLines": 33
//     },
//     "/core/org/apache/jmeter/testelement/propertyPropertyIteratorImpl.java": {
//         "coveredLines": 11,
//         "totalLines": 50
//     },
//     "/core/org/apache/jmeter/testelement/propertyStringProperty.java": {
//         "coveredLines": 107,
//         "totalLines": 108
//     },
//     "/core/org/apache/jmeter/testelement/propertyTestElementProperty.java": {
//         "coveredLines": 64,
//         "totalLines": 166
//     },
//     "/core/org/apache/jmeter/testbeansBeanInfoSupport.java": {
//         "coveredLines": 136,
//         "totalLines": 304
//     },
//     "/core/org/apache/jmeter/testbeansTestBean.java": {
//         "coveredLines": 18,
//         "totalLines": 30
//     },
//     "/core/org/apache/jmeter/testbeansTestBeanBeanInfo.java": {
//         "coveredLines": 68,
//         "totalLines": 104
//     },
//     "/core/org/apache/jmeter/testbeansTestBeanHelper.java": {
//         "coveredLines": 173,
//         "totalLines": 207
//     },
//     "/core/org/apache/jmeter/testbeans/guiBooleanPropertyEditor.java": {
//         "coveredLines": 22,
//         "totalLines": 66
//     },
//     "/core/org/apache/jmeter/testbeans/guiComboStringEditor.java": {
//         "coveredLines": 268,
//         "totalLines": 321
//     },
//     "/core/org/apache/jmeter/testbeans/guiEnumEditor.java": {
//         "coveredLines": 32,
//         "totalLines": 103
//     },
//     "/core/org/apache/jmeter/testbeans/guiFieldStringEditor.java": {
//         "coveredLines": 92,
//         "totalLines": 135
//     },
//     "/core/org/apache/jmeter/testbeans/guiFileEditor.java": {
//         "coveredLines": 26,
//         "totalLines": 232
//     },
//     "/core/org/apache/jmeter/testbeans/guiGenericTestBeanCustomizer.java": {
//         "coveredLines": 59,
//         "totalLines": 804
//     },
//     "/core/org/apache/jmeter/testbeans/guiIntegerPropertyEditor.java": {
//         "coveredLines": 38,
//         "totalLines": 44
//     },
//     "/core/org/apache/jmeter/testbeans/guiLongPropertyEditor.java": {
//         "coveredLines": 12,
//         "totalLines": 44
//     },
//     "/core/org/apache/jmeter/testbeans/guiPasswordEditor.java": {
//         "coveredLines": 98,
//         "totalLines": 131
//     },
//     "/core/org/apache/jmeter/testbeans/guiSharedCustomizer.java": {
//         "coveredLines": 23,
//         "totalLines": 30
//     },
//     "/core/org/apache/jmeter/testbeans/guiTableEditor.java": {
//         "coveredLines": 144,
//         "totalLines": 417
//     },
//     "/core/org/apache/jmeter/testbeans/guiTestBeanGUI.java": {
//         "coveredLines": 338,
//         "totalLines": 525
//     },
//     "/core/org/apache/jmeter/testbeans/guiTestBeanPropertyEditor.java": {
//         "coveredLines": 10,
//         "totalLines": 28
//     },
//     "/core/org/apache/jmeter/testbeans/guiTextAreaEditor.java": {
//         "coveredLines": 20,
//         "totalLines": 144
//     },
//     "/core/org/apache/jmeter/testbeans/guiTypeEditor.java": {
//         "coveredLines": 7,
//         "totalLines": 36
//     },
//     "/core/org/apache/jmeter/testbeans/guiWrapperEditor.java": {
//         "coveredLines": 253,
//         "totalLines": 446
//     },
//     "/core/org/apache/jmeter/swingHtmlPane.java": {
//         "coveredLines": 35,
//         "totalLines": 56
//     },
//     "/core/org/apache/jmeter/servicesFileServer.java": {
//         "coveredLines": 354,
//         "totalLines": 584
//     },
//     "/core/org/apache/jmeter/saveCSVSaveService.java": {
//         "coveredLines": 1114,
//         "totalLines": 1173
//     },
//     "/core/org/apache/jmeter/saveListenerResultWrapper.java": {
//         "coveredLines": 64,
//         "totalLines": 80
//     },
//     "/core/org/apache/jmeter/saveSaveGraphicsService.java": {
//         "coveredLines": 40,
//         "totalLines": 199
//     },
//     "/core/org/apache/jmeter/saveSaveService.java": {
//         "coveredLines": 300,
//         "totalLines": 638
//     },
//     "/core/org/apache/jmeter/saveScriptWrapper.java": {
//         "coveredLines": 22,
//         "totalLines": 28
//     },
//     "/core/org/apache/jmeter/saveScriptWrapperConverter.java": {
//         "coveredLines": 47,
//         "totalLines": 127
//     },
//     "/core/org/apache/jmeter/saveTestResultWrapper.java": {
//         "coveredLines": 34,
//         "totalLines": 79
//     },
//     "/core/org/apache/jmeter/save/convertersBooleanPropertyConverter.java": {
//         "coveredLines": 51,
//         "totalLines": 66
//     },
//     "/core/org/apache/jmeter/save/convertersConversionHelp.java": {
//         "coveredLines": 12,
//         "totalLines": 327
//     },
//     "/core/org/apache/jmeter/save/convertersHashTreeConverter.java": {
//         "coveredLines": 80,
//         "totalLines": 84
//     },
//     "/core/org/apache/jmeter/save/convertersIntegerPropertyConverter.java": {
//         "coveredLines": 20,
//         "totalLines": 65
//     },
//     "/core/org/apache/jmeter/save/convertersLongPropertyConverter.java": {
//         "coveredLines": 31,
//         "totalLines": 65
//     },
//     "/core/org/apache/jmeter/save/convertersMultiPropertyConverter.java": {
//         "coveredLines": 32,
//         "totalLines": 84
//     },
//     "/core/org/apache/jmeter/save/convertersSampleEventConverter.java": {
//         "coveredLines": 39,
//         "totalLines": 67
//     },
//     "/core/org/apache/jmeter/save/convertersSampleResultConverter.java": {
//         "coveredLines": 225,
//         "totalLines": 483
//     },
//     "/core/org/apache/jmeter/save/convertersSampleSaveConfigurationConverter.java": {
//         "coveredLines": 66,
//         "totalLines": 179
//     },
//     "/core/org/apache/jmeter/save/convertersStringPropertyConverter.java": {
//         "coveredLines": 4,
//         "totalLines": 66
//     },
//     "/core/org/apache/jmeter/save/convertersTestElementConverter.java": {
//         "coveredLines": 13,
//         "totalLines": 126
//     },
//     "/core/org/apache/jmeter/save/convertersTestElementPropertyConverter.java": {
//         "coveredLines": 34,
//         "totalLines": 137
//     },
//     "/core/org/apache/jmeter/save/convertersTestResultWrapperConverter.java": {
//         "coveredLines": 27,
//         "totalLines": 109
//     },
//     "/core/org/apache/jmeter/samplersAbstractSampleSender.java": {
//         "coveredLines": 25,
//         "totalLines": 52
//     },
//     "/core/org/apache/jmeter/samplersAbstractSampler.java": {
//         "coveredLines": 25,
//         "totalLines": 35
//     },
//     "/core/org/apache/jmeter/samplersAsynchSampleSender.java": {
//         "coveredLines": 47,
//         "totalLines": 168
//     },
//     "/core/org/apache/jmeter/samplersBatchSampleSender.java": {
//         "coveredLines": 117,
//         "totalLines": 212
//     },
//     "/core/org/apache/jmeter/samplersClearable.java": {
//         "coveredLines": 18,
//         "totalLines": 33
//     },
//     "/core/org/apache/jmeter/samplersDataStrippingSampleSender.java": {
//         "coveredLines": 31,
//         "totalLines": 140
//     },
//     "/core/org/apache/jmeter/samplersDiskStoreSampleSender.java": {
//         "coveredLines": 13,
//         "totalLines": 173
//     },
//     "/core/org/apache/jmeter/samplersEntry.java": {
//         "coveredLines": 54,
//         "totalLines": 94
//     },
//     "/core/org/apache/jmeter/samplersHoldSampleSender.java": {
//         "coveredLines": 83,
//         "totalLines": 96
//     },
//     "/core/org/apache/jmeter/samplersInterruptible.java": {
//         "coveredLines": 20,
//         "totalLines": 34
//     },
//     "/core/org/apache/jmeter/samplersRemoteListenerWrapper.java": {
//         "coveredLines": 71,
//         "totalLines": 134
//     },
//     "/core/org/apache/jmeter/samplersRemoteSampleListener.java": {
//         "coveredLines": 15,
//         "totalLines": 82
//     },
//     "/core/org/apache/jmeter/samplersRemoteSampleListenerImpl.java": {
//         "coveredLines": 109,
//         "totalLines": 127
//     },
//     "/core/org/apache/jmeter/samplersRemoteSampleListenerWrapper.java": {
//         "coveredLines": 39,
//         "totalLines": 74
//     },
//     "/core/org/apache/jmeter/samplersRemoteTestListenerWrapper.java": {
//         "coveredLines": 43,
//         "totalLines": 85
//     },
//     "/core/org/apache/jmeter/samplersRemoteable.java": {
//         "coveredLines": 13,
//         "totalLines": 26
//     },
//     "/core/org/apache/jmeter/samplersSampleEvent.java": {
//         "coveredLines": 40,
//         "totalLines": 229
//     },
//     "/core/org/apache/jmeter/samplersSampleListener.java": {
//         "coveredLines": 36,
//         "totalLines": 52
//     },
//     "/core/org/apache/jmeter/samplersSampleMonitor.java": {
//         "coveredLines": 26,
//         "totalLines": 38
//     },
//     "/core/org/apache/jmeter/samplersSampleResult.java": {
//         "coveredLines": 404,
//         "totalLines": 1510
//     },
//     "/core/org/apache/jmeter/samplersSampleSaveConfiguration.java": {
//         "coveredLines": 33,
//         "totalLines": 936
//     },
//     "/core/org/apache/jmeter/samplersSampleSender.java": {
//         "coveredLines": 38,
//         "totalLines": 50
//     },
//     "/core/org/apache/jmeter/samplersSampleSenderFactory.java": {
//         "coveredLines": 12,
//         "totalLines": 110
//     },
//     "/core/org/apache/jmeter/samplersSampler.java": {
//         "coveredLines": 33,
//         "totalLines": 41
//     },
//     "/core/org/apache/jmeter/samplersStandardSampleSender.java": {
//         "coveredLines": 55,
//         "totalLines": 87
//     },
//     "/core/org/apache/jmeter/samplersStatisticalSampleResult.java": {
//         "coveredLines": 18,
//         "totalLines": 138
//     },
//     "/core/org/apache/jmeter/samplersStatisticalSampleSender.java": {
//         "coveredLines": 121,
//         "totalLines": 226
//     },
//     "/core/org/apache/jmeter/samplers/guiAbstractSamplerGui.java": {
//         "coveredLines": 4,
//         "totalLines": 65
//     },
//     "/core/org/apache/jmeter/reportersAbstractListenerElement.java": {
//         "coveredLines": 13,
//         "totalLines": 57
//     },
//     "/core/org/apache/jmeter/reportersFileReporter.java": {
//         "coveredLines": 210,
//         "totalLines": 403
//     },
//     "/core/org/apache/jmeter/reportersResultAction.java": {
//         "coveredLines": 14,
//         "totalLines": 94
//     },
//     "/core/org/apache/jmeter/reportersResultCollector.java": {
//         "coveredLines": 193,
//         "totalLines": 677
//     },
//     "/core/org/apache/jmeter/reportersResultCollectorHelper.java": {
//         "coveredLines": 22,
//         "totalLines": 46
//     },
//     "/core/org/apache/jmeter/reportersResultSaver.java": {
//         "coveredLines": 267,
//         "totalLines": 287
//     },
//     "/core/org/apache/jmeter/reportersSummariser.java": {
//         "coveredLines": 243,
//         "totalLines": 381
//     },
//     "/core/org/apache/jmeter/reportersSummariserRunningSample.java": {
//         "coveredLines": 214,
//         "totalLines": 248
//     },
//     "/core/org/apache/jmeter/reporters/guiResultActionGui.java": {
//         "coveredLines": 71,
//         "totalLines": 103
//     },
//     "/core/org/apache/jmeter/reporters/guiResultSaverGui.java": {
//         "coveredLines": 161,
//         "totalLines": 193
//     },
//     "/core/org/apache/jmeter/reporters/guiSummariserGui.java": {
//         "coveredLines": 12,
//         "totalLines": 76
//     },
//     "/core/org/apache/jmeter/report/processorAbstractAggregatorFactory.java": {
//         "coveredLines": 36,
//         "totalLines": 76
//     },
//     "/core/org/apache/jmeter/report/processorAbstractSampleConsumer.java": {
//         "coveredLines": 238,
//         "totalLines": 253
//     },
//     "/core/org/apache/jmeter/report/processorAbstractSampleProcessor.java": {
//         "coveredLines": 21,
//         "totalLines": 97
//     },
//     "/core/org/apache/jmeter/report/processorAbstractSampleSource.java": {
//         "coveredLines": 57,
//         "totalLines": 96
//     },
//     "/core/org/apache/jmeter/report/processorAbstractSummaryConsumer.java": {
//         "coveredLines": 258,
//         "totalLines": 286
//     },
//     "/core/org/apache/jmeter/report/processorAggregateConsumer.java": {
//         "coveredLines": 12,
//         "totalLines": 115
//     },
//     "/core/org/apache/jmeter/report/processorAggregator.java": {
//         "coveredLines": 46,
//         "totalLines": 53
//     },
//     "/core/org/apache/jmeter/report/processorAggregatorFactory.java": {
//         "coveredLines": 27,
//         "totalLines": 49
//     },
//     "/core/org/apache/jmeter/report/processorApdexSummaryConsumer.java": {
//         "coveredLines": 94,
//         "totalLines": 178
//     },
//     "/core/org/apache/jmeter/report/processorApdexSummaryData.java": {
//         "coveredLines": 3,
//         "totalLines": 110
//     },
//     "/core/org/apache/jmeter/report/processorApdexThresholdsInfo.java": {
//         "coveredLines": 56,
//         "totalLines": 67
//     },
//     "/core/org/apache/jmeter/report/processorChannelContext.java": {
//         "coveredLines": 30,
//         "totalLines": 31
//     },
//     "/core/org/apache/jmeter/report/processorCsvFileSampleSource.java": {
//         "coveredLines": 84,
//         "totalLines": 356
//     },
//     "/core/org/apache/jmeter/report/processorErrorsSummaryConsumer.java": {
//         "coveredLines": 168,
//         "totalLines": 183
//     },
//     "/core/org/apache/jmeter/report/processorExternalSampleSorter.java": {
//         "coveredLines": 407,
//         "totalLines": 607
//     },
//     "/core/org/apache/jmeter/report/processorFieldSampleComparator.java": {
//         "coveredLines": 17,
//         "totalLines": 53
//     },
//     "/core/org/apache/jmeter/report/processorFilterConsumer.java": {
//         "coveredLines": 104,
//         "totalLines": 114
//     },
//     "/core/org/apache/jmeter/report/processorJob.java": {
//         "coveredLines": 51,
//         "totalLines": 57
//     },
//     "/core/org/apache/jmeter/report/processorListResultData.java": {
//         "coveredLines": 42,
//         "totalLines": 97
//     },
//     "/core/org/apache/jmeter/report/processorMapResultData.java": {
//         "coveredLines": 17,
//         "totalLines": 90
//     },
//     "/core/org/apache/jmeter/report/processorMaxAggregator.java": {
//         "coveredLines": 36,
//         "totalLines": 72
//     },
//     "/core/org/apache/jmeter/report/processorMaxAggregatorFactory.java": {
//         "coveredLines": 19,
//         "totalLines": 39
//     },
//     "/core/org/apache/jmeter/report/processorMeanAggregator.java": {
//         "coveredLines": 68,
//         "totalLines": 71
//     },
//     "/core/org/apache/jmeter/report/processorMeanAggregatorFactory.java": {
//         "coveredLines": 4,
//         "totalLines": 39
//     },
//     "/core/org/apache/jmeter/report/processorMedianAggregatorFactory.java": {
//         "coveredLines": 37,
//         "totalLines": 40
//     },
//     "/core/org/apache/jmeter/report/processorMinAggregator.java": {
//         "coveredLines": 15,
//         "totalLines": 72
//     },
//     "/core/org/apache/jmeter/report/processorMinAggregatorFactory.java": {
//         "coveredLines": 9,
//         "totalLines": 35
//     },
//     "/core/org/apache/jmeter/report/processorNormalizerSampleConsumer.java": {
//         "coveredLines": 25,
//         "totalLines": 127
//     },
//     "/core/org/apache/jmeter/report/processorPercentileAggregator.java": {
//         "coveredLines": 54,
//         "totalLines": 97
//     },
//     "/core/org/apache/jmeter/report/processorPercentileAggregatorFactory.java": {
//         "coveredLines": 67,
//         "totalLines": 68
//     },
//     "/core/org/apache/jmeter/report/processorRequestsSummaryConsumer.java": {
//         "coveredLines": 47,
//         "totalLines": 81
//     },
//     "/core/org/apache/jmeter/report/processorResultData.java": {
//         "coveredLines": 17,
//         "totalLines": 34
//     },
//     "/core/org/apache/jmeter/report/processorResultDataVisitor.java": {
//         "coveredLines": 23,
//         "totalLines": 56
//     },
//     "/core/org/apache/jmeter/report/processorSampleConsumer.java": {
//         "coveredLines": 36,
//         "totalLines": 91
//     },
//     "/core/org/apache/jmeter/report/processorSampleContext.java": {
//         "coveredLines": 32,
//         "totalLines": 66
//     },
//     "/core/org/apache/jmeter/report/processorSampleIndexer.java": {
//         "coveredLines": 37,
//         "totalLines": 46
//     },
//     "/core/org/apache/jmeter/report/processorSampleProcessor.java": {
//         "coveredLines": 17,
//         "totalLines": 75
//     },
//     "/core/org/apache/jmeter/report/processorSampleProducer.java": {
//         "coveredLines": 58,
//         "totalLines": 82
//     },
//     "/core/org/apache/jmeter/report/processorSampleSource.java": {
//         "coveredLines": 43,
//         "totalLines": 68
//     },
//     "/core/org/apache/jmeter/report/processorSampleWriterConsumer.java": {
//         "coveredLines": 33,
//         "totalLines": 121
//     },
//     "/core/org/apache/jmeter/report/processorStatisticsSummaryConsumer.java": {
//         "coveredLines": 14,
//         "totalLines": 203
//     },
//     "/core/org/apache/jmeter/report/processorStatisticsSummaryData.java": {
//         "coveredLines": 183,
//         "totalLines": 283
//     },
//     "/core/org/apache/jmeter/report/processorSumAggregator.java": {
//         "coveredLines": 13,
//         "totalLines": 72
//     },
//     "/core/org/apache/jmeter/report/processorSumAggregatorFactory.java": {
//         "coveredLines": 36,
//         "totalLines": 39
//     },
//     "/core/org/apache/jmeter/report/processorTaggerConsumer.java": {
//         "coveredLines": 26,
//         "totalLines": 129
//     },
//     "/core/org/apache/jmeter/report/processorThresholdSelector.java": {
//         "coveredLines": 25,
//         "totalLines": 37
//     },
//     "/core/org/apache/jmeter/report/processorTimeRateAggregator.java": {
//         "coveredLines": 34,
//         "totalLines": 88
//     },
//     "/core/org/apache/jmeter/report/processorTimeRateAggregatorFactory.java": {
//         "coveredLines": 47,
//         "totalLines": 62
//     },
//     "/core/org/apache/jmeter/report/processorTop5ErrorsBySamplerConsumer.java": {
//         "coveredLines": 185,
//         "totalLines": 191
//     },
//     "/core/org/apache/jmeter/report/processorTop5ErrorsSummaryData.java": {
//         "coveredLines": 44,
//         "totalLines": 111
//     },
//     "/core/org/apache/jmeter/report/processorValueResultData.java": {
//         "coveredLines": 17,
//         "totalLines": 76
//     },
//     "/core/org/apache/jmeter/report/processor/graphAbstractGraphConsumer.java": {
//         "coveredLines": 61,
//         "totalLines": 591
//     },
//     "/core/org/apache/jmeter/report/processor/graphAbstractGraphValueSelector.java": {
//         "coveredLines": 29,
//         "totalLines": 44
//     },
//     "/core/org/apache/jmeter/report/processor/graphAbstractOverTimeGraphConsumer.java": {
//         "coveredLines": 50,
//         "totalLines": 110
//     },
//     "/core/org/apache/jmeter/report/processor/graphAbstractSeriesSelector.java": {
//         "coveredLines": 31,
//         "totalLines": 59
//     },
//     "/core/org/apache/jmeter/report/processor/graphAbstractVersusRequestsGraphConsumer.java": {
//         "coveredLines": 264,
//         "totalLines": 363
//     },
//     "/core/org/apache/jmeter/report/processor/graphCodeSeriesSelector.java": {
//         "coveredLines": 26,
//         "totalLines": 44
//     },
//     "/core/org/apache/jmeter/report/processor/graphConnectTimeValueSelector.java": {
//         "coveredLines": 17,
//         "totalLines": 59
//     },
//     "/core/org/apache/jmeter/report/processor/graphCountValueSelector.java": {
//         "coveredLines": 54,
//         "totalLines": 58
//     },
//     "/core/org/apache/jmeter/report/processor/graphElapsedTimeValueSelector.java": {
//         "coveredLines": 5,
//         "totalLines": 57
//     },
//     "/core/org/apache/jmeter/report/processor/graphGraphKeysSelector.java": {
//         "coveredLines": 11,
//         "totalLines": 30
//     },
//     "/core/org/apache/jmeter/report/processor/graphGraphSeriesSelector.java": {
//         "coveredLines": 0,
//         "totalLines": 38
//     },
//     "/core/org/apache/jmeter/report/processor/graphGraphValueSelector.java": {
//         "coveredLines": 19,
//         "totalLines": 41
//     },
//     "/core/org/apache/jmeter/report/processor/graphGroupData.java": {
//         "coveredLines": 17,
//         "totalLines": 71
//     },
//     "/core/org/apache/jmeter/report/processor/graphGroupInfo.java": {
//         "coveredLines": 41,
//         "totalLines": 115
//     },
//     "/core/org/apache/jmeter/report/processor/graphIndexedNameSelector.java": {
//         "coveredLines": 38,
//         "totalLines": 63
//     },
//     "/core/org/apache/jmeter/report/processor/graphLatencyValueSelector.java": {
//         "coveredLines": 26,
//         "totalLines": 59
//     },
//     "/core/org/apache/jmeter/report/processor/graphNameSeriesSelector.java": {
//         "coveredLines": 7,
//         "totalLines": 50
//     },
//     "/core/org/apache/jmeter/report/processor/graphSeriesData.java": {
//         "coveredLines": 141,
//         "totalLines": 154
//     },
//     "/core/org/apache/jmeter/report/processor/graphStaticSeriesSelector.java": {
//         "coveredLines": 2,
//         "totalLines": 64
//     },
//     "/core/org/apache/jmeter/report/processor/graphStatusSeriesSelector.java": {
//         "coveredLines": 42,
//         "totalLines": 86
//     },
//     "/core/org/apache/jmeter/report/processor/graphSuccessfulElapsedTimeValueSelector.java": {
//         "coveredLines": 5,
//         "totalLines": 48
//     },
//     "/core/org/apache/jmeter/report/processor/graphTimeStampKeysSelector.java": {
//         "coveredLines": 51,
//         "totalLines": 86
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implActiveThreadsGraphConsumer.java": {
//         "coveredLines": 75,
//         "totalLines": 95
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implBytesThroughputGraphConsumer.java": {
//         "coveredLines": 28,
//         "totalLines": 109
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implCodesPerSecondGraphConsumer.java": {
//         "coveredLines": 81,
//         "totalLines": 84
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implConnectTimeOverTimeGraphConsumer.java": {
//         "coveredLines": 61,
//         "totalLines": 75
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implHitsPerSecondGraphConsumer.java": {
//         "coveredLines": 52,
//         "totalLines": 100
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implLatencyOverTimeGraphConsumer.java": {
//         "coveredLines": 25,
//         "totalLines": 68
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implLatencyVSRequestGraphConsumer.java": {
//         "coveredLines": 34,
//         "totalLines": 74
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implResponseTimeDistributionGraphConsumer.java": {
//         "coveredLines": 48,
//         "totalLines": 111
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implResponseTimeOverTimeGraphConsumer.java": {
//         "coveredLines": 17,
//         "totalLines": 69
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implResponseTimePerSampleGraphConsumer.java": {
//         "coveredLines": 14,
//         "totalLines": 126
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implResponseTimePercentilesGraphConsumer.java": {
//         "coveredLines": 83,
//         "totalLines": 92
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implResponseTimePercentilesOverTimeGraphConsumer.java": {
//         "coveredLines": 57,
//         "totalLines": 132
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implResponseTimeVSRequestGraphConsumer.java": {
//         "coveredLines": 3,
//         "totalLines": 73
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implSyntheticResponseTimeDistributionGraphConsumer.java": {
//         "coveredLines": 126,
//         "totalLines": 161
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implTimeVSThreadGraphConsumer.java": {
//         "coveredLines": 64,
//         "totalLines": 85
//     },
//     "/core/org/apache/jmeter/report/processor/graph/implTransactionsPerSecondGraphConsumer.java": {
//         "coveredLines": 38,
//         "totalLines": 103
//     },
//     "/core/org/apache/jmeter/report/dashboardAbstractDataExporter.java": {
//         "coveredLines": 72,
//         "totalLines": 119
//     },
//     "/core/org/apache/jmeter/report/dashboardDataExporter.java": {
//         "coveredLines": 1,
//         "totalLines": 62
//     },
//     "/core/org/apache/jmeter/report/dashboardExportException.java": {
//         "coveredLines": 4,
//         "totalLines": 59
//     },
//     "/core/org/apache/jmeter/report/dashboardGenerationException.java": {
//         "coveredLines": 37,
//         "totalLines": 60
//     },
//     "/core/org/apache/jmeter/report/dashboardHtmlTemplateExporter.java": {
//         "coveredLines": 273,
//         "totalLines": 497
//     },
//     "/core/org/apache/jmeter/report/dashboardJsonizerVisitor.java": {
//         "coveredLines": 49,
//         "totalLines": 104
//     },
//     "/core/org/apache/jmeter/report/dashboardReportGenerator.java": {
//         "coveredLines": 264,
//         "totalLines": 583
//     },
//     "/core/org/apache/jmeter/report/dashboardTemplateVisitor.java": {
//         "coveredLines": 42,
//         "totalLines": 130
//     },
//     "/core/org/apache/jmeter/report/coreAbstractSampleWriter.java": {
//         "coveredLines": 59,
//         "totalLines": 132
//     },
//     "/core/org/apache/jmeter/report/coreControllerSamplePredicate.java": {
//         "coveredLines": 29,
//         "totalLines": 39
//     },
//     "/core/org/apache/jmeter/report/coreConvertException.java": {
//         "coveredLines": 0,
//         "totalLines": 66
//     },
//     "/core/org/apache/jmeter/report/coreConverters.java": {
//         "coveredLines": 31,
//         "totalLines": 177
//     },
//     "/core/org/apache/jmeter/report/coreCsvFile.java": {
//         "coveredLines": 11,
//         "totalLines": 71
//     },
//     "/core/org/apache/jmeter/report/coreCsvSampleReader.java": {
//         "coveredLines": 146,
//         "totalLines": 217
//     },
//     "/core/org/apache/jmeter/report/coreCsvSampleWriter.java": {
//         "coveredLines": 112,
//         "totalLines": 165
//     },
//     "/core/org/apache/jmeter/report/coreDataContext.java": {
//         "coveredLines": 22,
//         "totalLines": 31
//     },
//     "/core/org/apache/jmeter/report/coreJsonUtil.java": {
//         "coveredLines": 45,
//         "totalLines": 62
//     },
//     "/core/org/apache/jmeter/report/coreSample.java": {
//         "coveredLines": 299,
//         "totalLines": 332
//     },
//     "/core/org/apache/jmeter/report/coreSampleBuilder.java": {
//         "coveredLines": 30,
//         "totalLines": 128
//     },
//     "/core/org/apache/jmeter/report/coreSampleComparator.java": {
//         "coveredLines": 45,
//         "totalLines": 65
//     },
//     "/core/org/apache/jmeter/report/coreSampleException.java": {
//         "coveredLines": 26,
//         "totalLines": 69
//     },
//     "/core/org/apache/jmeter/report/coreSampleMetaDataParser.java": {
//         "coveredLines": 36,
//         "totalLines": 40
//     },
//     "/core/org/apache/jmeter/report/coreSampleMetadata.java": {
//         "coveredLines": 128,
//         "totalLines": 232
//     },
//     "/core/org/apache/jmeter/report/coreSamplePredicate.java": {
//         "coveredLines": 1,
//         "totalLines": 36
//     },
//     "/core/org/apache/jmeter/report/coreSampleSelector.java": {
//         "coveredLines": 21,
//         "totalLines": 38
//     },
//     "/core/org/apache/jmeter/report/coreSampleWriter.java": {
//         "coveredLines": 6,
//         "totalLines": 43
//     },
//     "/core/org/apache/jmeter/report/coreStringConverter.java": {
//         "coveredLines": 6,
//         "totalLines": 40
//     },
//     "/core/org/apache/jmeter/report/coreTimeHelper.java": {
//         "coveredLines": 35,
//         "totalLines": 84
//     },
//     "/core/org/apache/jmeter/report/configConfigurationException.java": {
//         "coveredLines": 2,
//         "totalLines": 60
//     },
//     "/core/org/apache/jmeter/report/configConfigurationUtils.java": {
//         "coveredLines": 47,
//         "totalLines": 61
//     },
//     "/core/org/apache/jmeter/report/configExporterConfiguration.java": {
//         "coveredLines": 18,
//         "totalLines": 98
//     },
//     "/core/org/apache/jmeter/report/configGraphConfiguration.java": {
//         "coveredLines": 20,
//         "totalLines": 68
//     },
//     "/core/org/apache/jmeter/report/configInstanceConfiguration.java": {
//         "coveredLines": 39,
//         "totalLines": 49
//     },
//     "/core/org/apache/jmeter/report/configReportGeneratorConfiguration.java": {
//         "coveredLines": 62,
//         "totalLines": 778
//     },
//     "/core/org/apache/jmeter/report/configSubConfiguration.java": {
//         "coveredLines": 25,
//         "totalLines": 68
//     },
//     "/core/org/apache/jmeter/processorPostProcessor.java": {
//         "coveredLines": 1,
//         "totalLines": 32
//     },
//     "/core/org/apache/jmeter/processorPreProcessor.java": {
//         "coveredLines": 14,
//         "totalLines": 28
//     },
//     "/core/org/apache/jmeter/processor/guiAbstractPostProcessorGui.java": {
//         "coveredLines": 32,
//         "totalLines": 45
//     },
//     "/core/org/apache/jmeter/processor/guiAbstractPreProcessorGui.java": {
//         "coveredLines": 34,
//         "totalLines": 43
//     },
//     "/core/org/apache/jmeter/pluginJMeterPlugin.java": {
//         "coveredLines": 4,
//         "totalLines": 25
//     },
//     "/core/org/apache/jmeter/pluginPluginManager.java": {
//         "coveredLines": 62,
//         "totalLines": 73
//     },
//     "/core/org/apache/jmeter/guiAbstractJMeterGuiComponent.java": {
//         "coveredLines": 99,
//         "totalLines": 341
//     },
//     "/core/org/apache/jmeter/guiAbstractScopedJMeterGuiComponent.java": {
//         "coveredLines": 133,
//         "totalLines": 143
//     },
//     "/core/org/apache/jmeter/guiClearGui.java": {
//         "coveredLines": 1,
//         "totalLines": 32
//     },
//     "/core/org/apache/jmeter/guiCommentPanel.java": {
//         "coveredLines": 59,
//         "totalLines": 74
//     },
//     "/core/org/apache/jmeter/guiGUIFactory.java": {
//         "coveredLines": 165,
//         "totalLines": 174
//     },
//     "/core/org/apache/jmeter/guiGuiPackage.java": {
//         "coveredLines": 489,
//         "totalLines": 871
//     },
//     "/core/org/apache/jmeter/guiJMeterFileFilter.java": {
//         "coveredLines": 72,
//         "totalLines": 113
//     },
//     "/core/org/apache/jmeter/guiJMeterGUIComponent.java": {
//         "coveredLines": 121,
//         "totalLines": 224
//     },
//     "/core/org/apache/jmeter/guiLoggerPanel.java": {
//         "coveredLines": 117,
//         "totalLines": 127
//     },
//     "/core/org/apache/jmeter/guiMainFrame.java": {
//         "coveredLines": 421,
//         "totalLines": 899
//     },
//     "/core/org/apache/jmeter/guiNamePanel.java": {
//         "coveredLines": 43,
//         "totalLines": 141
//     },
//     "/core/org/apache/jmeter/guiOnErrorPanel.java": {
//         "coveredLines": 17,
//         "totalLines": 115
//     },
//     "/core/org/apache/jmeter/guiSavePropertyDialog.java": {
//         "coveredLines": 90,
//         "totalLines": 170
//     },
//     "/core/org/apache/jmeter/guiSearchable.java": {
//         "coveredLines": 6,
//         "totalLines": 40
//     },
//     "/core/org/apache/jmeter/guiServerPanel.java": {
//         "coveredLines": 111,
//         "totalLines": 182
//     },
//     "/core/org/apache/jmeter/guiStoppable.java": {
//         "coveredLines": 15,
//         "totalLines": 30
//     },
//     "/core/org/apache/jmeter/guiUndoHistory.java": {
//         "coveredLines": 53,
//         "totalLines": 370
//     },
//     "/core/org/apache/jmeter/guiUndoHistoryItem.java": {
//         "coveredLines": 70,
//         "totalLines": 71
//     },
//     "/core/org/apache/jmeter/guiUnsharedComponent.java": {
//         "coveredLines": 24,
//         "totalLines": 28
//     },
//     "/core/org/apache/jmeter/gui/utilCheckBoxPanel.java": {
//         "coveredLines": 39,
//         "totalLines": 40
//     },
//     "/core/org/apache/jmeter/gui/utilEscapeDialog.java": {
//         "coveredLines": 11,
//         "totalLines": 64
//     },
//     "/core/org/apache/jmeter/gui/utilFileDialoger.java": {
//         "coveredLines": 20,
//         "totalLines": 276
//     },
//     "/core/org/apache/jmeter/gui/utilFileListPanel.java": {
//         "coveredLines": 140,
//         "totalLines": 222
//     },
//     "/core/org/apache/jmeter/gui/utilFilePanel.java": {
//         "coveredLines": 52,
//         "totalLines": 73
//     },
//     "/core/org/apache/jmeter/gui/utilFilePanelEntry.java": {
//         "coveredLines": 69,
//         "totalLines": 167
//     },
//     "/core/org/apache/jmeter/gui/utilFocusRequester.java": {
//         "coveredLines": 11,
//         "totalLines": 40
//     },
//     "/core/org/apache/jmeter/gui/utilHeaderAsPropertyRenderer.java": {
//         "coveredLines": 29,
//         "totalLines": 90
//     },
//     "/core/org/apache/jmeter/gui/utilHorizontalPanel.java": {
//         "coveredLines": 18,
//         "totalLines": 75
//     },
//     "/core/org/apache/jmeter/gui/utilIconToolbarBean.java": {
//         "coveredLines": 58,
//         "totalLines": 103
//     },
//     "/core/org/apache/jmeter/gui/utilJDateField.java": {
//         "coveredLines": 88,
//         "totalLines": 208
//     },
//     "/core/org/apache/jmeter/gui/utilJLabeledRadioI18N.java": {
//         "coveredLines": 194,
//         "totalLines": 226
//     },
//     "/core/org/apache/jmeter/gui/utilJMeterColor.java": {
//         "coveredLines": 12,
//         "totalLines": 42
//     },
//     "/core/org/apache/jmeter/gui/utilJMeterMenuBar.java": {
//         "coveredLines": 277,
//         "totalLines": 840
//     },
//     "/core/org/apache/jmeter/gui/utilJMeterToolBar.java": {
//         "coveredLines": 258,
//         "totalLines": 297
//     },
//     "/core/org/apache/jmeter/gui/utilJSyntaxTextArea.java": {
//         "coveredLines": 32,
//         "totalLines": 242
//     },
//     "/core/org/apache/jmeter/gui/utilJTextScrollPane.java": {
//         "coveredLines": 28,
//         "totalLines": 83
//     },
//     "/core/org/apache/jmeter/gui/utilMenuFactory.java": {
//         "coveredLines": 658,
//         "totalLines": 743
//     },
//     "/core/org/apache/jmeter/gui/utilMenuInfo.java": {
//         "coveredLines": 32,
//         "totalLines": 56
//     },
//     "/core/org/apache/jmeter/gui/utilNumberFieldErrorListener.java": {
//         "coveredLines": 31,
//         "totalLines": 58
//     },
//     "/core/org/apache/jmeter/gui/utilPowerTableModel.java": {
//         "coveredLines": 80,
//         "totalLines": 255
//     },
//     "/core/org/apache/jmeter/gui/utilTextAreaCellRenderer.java": {
//         "coveredLines": 46,
//         "totalLines": 56
//     },
//     "/core/org/apache/jmeter/gui/utilTextAreaTableCellEditor.java": {
//         "coveredLines": 210,
//         "totalLines": 328
//     },
//     "/core/org/apache/jmeter/gui/utilTextBoxDialoger.java": {
//         "coveredLines": 55,
//         "totalLines": 232
//     },
//     "/core/org/apache/jmeter/gui/utilTristateCheckBox.java": {
//         "coveredLines": 258,
//         "totalLines": 380
//     },
//     "/core/org/apache/jmeter/gui/utilTristateState.java": {
//         "coveredLines": 17,
//         "totalLines": 44
//     },
//     "/core/org/apache/jmeter/gui/utilVerticalPanel.java": {
//         "coveredLines": 25,
//         "totalLines": 72
//     },
//     "/core/org/apache/jmeter/gui/treeJMeterCellRenderer.java": {
//         "coveredLines": 62,
//         "totalLines": 75
//     },
//     "/core/org/apache/jmeter/gui/treeJMeterTreeListener.java": {
//         "coveredLines": 55,
//         "totalLines": 251
//     },
//     "/core/org/apache/jmeter/gui/treeJMeterTreeModel.java": {
//         "coveredLines": 224,
//         "totalLines": 273
//     },
//     "/core/org/apache/jmeter/gui/treeJMeterTreeNode.java": {
//         "coveredLines": 99,
//         "totalLines": 201
//     },
//     "/core/org/apache/jmeter/gui/treeJMeterTreeTransferHandler.java": {
//         "coveredLines": 108,
//         "totalLines": 316
//     },
//     "/core/org/apache/jmeter/gui/treeNamedTreeNode.java": {
//         "coveredLines": 10,
//         "totalLines": 26
//     },
//     "/core/org/apache/jmeter/gui/pluginMenuCreator.java": {
//         "coveredLines": 19,
//         "totalLines": 60
//     },
//     "/core/org/apache/jmeter/gui/actionAboutCommand.java": {
//         "coveredLines": 45,
//         "totalLines": 123
//     },
//     "/core/org/apache/jmeter/gui/actionAbstractAction.java": {
//         "coveredLines": 14,
//         "totalLines": 63
//     },
//     "/core/org/apache/jmeter/gui/actionAbstractActionWithNoRunningTest.java": {
//         "coveredLines": 4,
//         "totalLines": 54
//     },
//     "/core/org/apache/jmeter/gui/actionActionNames.java": {
//         "coveredLines": 53,
//         "totalLines": 108
//     },
//     "/core/org/apache/jmeter/gui/actionActionRouter.java": {
//         "coveredLines": 302,
//         "totalLines": 350
//     },
//     "/core/org/apache/jmeter/gui/actionAddParent.java": {
//         "coveredLines": 33,
//         "totalLines": 83
//     },
//     "/core/org/apache/jmeter/gui/actionAddToTree.java": {
//         "coveredLines": 30,
//         "totalLines": 81
//     },
//     "/core/org/apache/jmeter/gui/actionChangeLanguage.java": {
//         "coveredLines": 57,
//         "totalLines": 73
//     },
//     "/core/org/apache/jmeter/gui/actionChangeParent.java": {
//         "coveredLines": 63,
//         "totalLines": 113
//     },
//     "/core/org/apache/jmeter/gui/actionCheckDirty.java": {
//         "coveredLines": 72,
//         "totalLines": 191
//     },
//     "/core/org/apache/jmeter/gui/actionClear.java": {
//         "coveredLines": 33,
//         "totalLines": 84
//     },
//     "/core/org/apache/jmeter/gui/actionClose.java": {
//         "coveredLines": 99,
//         "totalLines": 113
//     },
//     "/core/org/apache/jmeter/gui/actionCollapseExpand.java": {
//         "coveredLines": 2,
//         "totalLines": 79
//     },
//     "/core/org/apache/jmeter/gui/actionCollapseExpandTreeBranch.java": {
//         "coveredLines": 84,
//         "totalLines": 102
//     },
//     "/core/org/apache/jmeter/gui/actionCommand.java": {
//         "coveredLines": 22,
//         "totalLines": 30
//     },
//     "/core/org/apache/jmeter/gui/actionCopy.java": {
//         "coveredLines": 46,
//         "totalLines": 147
//     },
//     "/core/org/apache/jmeter/gui/actionCreateFunctionDialog.java": {
//         "coveredLines": 30,
//         "totalLines": 52
//     },
//     "/core/org/apache/jmeter/gui/actionCut.java": {
//         "coveredLines": 16,
//         "totalLines": 61
//     },
//     "/core/org/apache/jmeter/gui/actionDuplicate.java": {
//         "coveredLines": 4,
//         "totalLines": 68
//     },
//     "/core/org/apache/jmeter/gui/actionEditCommand.java": {
//         "coveredLines": 5,
//         "totalLines": 64
//     },
//     "/core/org/apache/jmeter/gui/actionEnableComponent.java": {
//         "coveredLines": 31,
//         "totalLines": 87
//     },
//     "/core/org/apache/jmeter/gui/actionExitCommand.java": {
//         "coveredLines": 5,
//         "totalLines": 80
//     },
//     "/core/org/apache/jmeter/gui/actionHelp.java": {
//         "coveredLines": 78,
//         "totalLines": 123
//     },
//     "/core/org/apache/jmeter/gui/actionKeyStrokes.java": {
//         "coveredLines": 110,
//         "totalLines": 116
//     },
//     "/core/org/apache/jmeter/gui/actionLoad.java": {
//         "coveredLines": 220,
//         "totalLines": 246
//     },
//     "/core/org/apache/jmeter/gui/actionLoadDraggedFile.java": {
//         "coveredLines": 29,
//         "totalLines": 40
//     },
//     "/core/org/apache/jmeter/gui/actionLoadRecentProject.java": {
//         "coveredLines": 174,
//         "totalLines": 260
//     },
//     "/core/org/apache/jmeter/gui/actionLoggerPanelEnableDisable.java": {
//         "coveredLines": 65,
//         "totalLines": 81
//     },
//     "/core/org/apache/jmeter/gui/actionLookAndFeelCommand.java": {
//         "coveredLines": 74,
//         "totalLines": 152
//     },
//     "/core/org/apache/jmeter/gui/actionMove.java": {
//         "coveredLines": 78,
//         "totalLines": 160
//     },
//     "/core/org/apache/jmeter/gui/actionPaste.java": {
//         "coveredLines": 82,
//         "totalLines": 95
//     },
//     "/core/org/apache/jmeter/gui/actionRawTextSearcher.java": {
//         "coveredLines": 62,
//         "totalLines": 81
//     },
//     "/core/org/apache/jmeter/gui/actionRegexpSearcher.java": {
//         "coveredLines": 52,
//         "totalLines": 72
//     },
//     "/core/org/apache/jmeter/gui/actionRemoteStart.java": {
//         "coveredLines": 97,
//         "totalLines": 118
//     },
//     "/core/org/apache/jmeter/gui/actionRemove.java": {
//         "coveredLines": 29,
//         "totalLines": 97
//     },
//     "/core/org/apache/jmeter/gui/actionResetSearchCommand.java": {
//         "coveredLines": 32,
//         "totalLines": 68
//     },
//     "/core/org/apache/jmeter/gui/actionRevertProject.java": {
//         "coveredLines": 41,
//         "totalLines": 78
//     },
//     "/core/org/apache/jmeter/gui/actionSSLManagerCommand.java": {
//         "coveredLines": 45,
//         "totalLines": 135
//     },
//     "/core/org/apache/jmeter/gui/actionSave.java": {
//         "coveredLines": 215,
//         "totalLines": 453
//     },
//     "/core/org/apache/jmeter/gui/actionSaveGraphics.java": {
//         "coveredLines": 129,
//         "totalLines": 130
//     },
//     "/core/org/apache/jmeter/gui/actionSearchTreeCommand.java": {
//         "coveredLines": 16,
//         "totalLines": 54
//     },
//     "/core/org/apache/jmeter/gui/actionSearchTreeDialog.java": {
//         "coveredLines": 152,
//         "totalLines": 233
//     },
//     "/core/org/apache/jmeter/gui/actionSearcher.java": {
//         "coveredLines": 3,
//         "totalLines": 34
//     },
//     "/core/org/apache/jmeter/gui/actionSelectTemplatesDialog.java": {
//         "coveredLines": 107,
//         "totalLines": 246
//     },
//     "/core/org/apache/jmeter/gui/actionStart.java": {
//         "coveredLines": 79,
//         "totalLines": 297
//     },
//     "/core/org/apache/jmeter/gui/actionStopStoppables.java": {
//         "coveredLines": 53,
//         "totalLines": 76
//     },
//     "/core/org/apache/jmeter/gui/actionTemplatesCommand.java": {
//         "coveredLines": 50,
//         "totalLines": 58
//     },
//     "/core/org/apache/jmeter/gui/actionUndoCommand.java": {
//         "coveredLines": 71,
//         "totalLines": 81
//     },
//     "/core/org/apache/jmeter/gui/actionWhat.java": {
//         "coveredLines": 75,
//         "totalLines": 89
//     },
//     "/core/org/apache/jmeter/gui/action/validationTreeClonerForValidation.java": {
//         "coveredLines": 71,
//         "totalLines": 88
//     },
//     "/core/org/apache/jmeter/gui/action/templateTemplate.java": {
//         "coveredLines": 11,
//         "totalLines": 81
//     },
//     "/core/org/apache/jmeter/gui/action/templateTemplateManager.java": {
//         "coveredLines": 28,
//         "totalLines": 164
//     },
//     "/core/org/apache/jmeter/functionsAbstractFunction.java": {
//         "coveredLines": 8,
//         "totalLines": 143
//     },
//     "/core/org/apache/jmeter/functionsFunction.java": {
//         "coveredLines": 37,
//         "totalLines": 76
//     },
//     "/core/org/apache/jmeter/functionsInvalidVariableException.java": {
//         "coveredLines": 8,
//         "totalLines": 38
//     },
//     "/core/org/apache/jmeter/functions/utilArgumentDecoder.java": {
//         "coveredLines": 38,
//         "totalLines": 41
//     },
//     "/core/org/apache/jmeter/functions/utilArgumentEncoder.java": {
//         "coveredLines": 24,
//         "totalLines": 41
//     },
//     "/core/org/apache/jmeter/functions/guiFunctionHelper.java": {
//         "coveredLines": 39,
//         "totalLines": 187
//     },
//     "/core/org/apache/jmeter/exceptionsIllegalUserActionException.java": {
//         "coveredLines": 6,
//         "totalLines": 42
//     },
//     "/core/org/apache/jmeter/engineClientJMeterEngine.java": {
//         "coveredLines": 55,
//         "totalLines": 204
//     },
//     "/core/org/apache/jmeter/engineConvertListeners.java": {
//         "coveredLines": 111,
//         "totalLines": 112
//     },
//     "/core/org/apache/jmeter/engineDistributedRunner.java": {
//         "coveredLines": 115,
//         "totalLines": 272
//     },
//     "/core/org/apache/jmeter/engineJMeterEngine.java": {
//         "coveredLines": 30,
//         "totalLines": 42
//     },
//     "/core/org/apache/jmeter/engineJMeterEngineException.java": {
//         "coveredLines": 38,
//         "totalLines": 44
//     },
//     "/core/org/apache/jmeter/enginePreCompiler.java": {
//         "coveredLines": 66,
//         "totalLines": 109
//     },
//     "/core/org/apache/jmeter/engineRemoteJMeterEngine.java": {
//         "coveredLines": 3,
//         "totalLines": 43
//     },
//     "/core/org/apache/jmeter/engineRemoteJMeterEngineImpl.java": {
//         "coveredLines": 72,
//         "totalLines": 247
//     },
//     "/core/org/apache/jmeter/engineStandardJMeterEngine.java": {
//         "coveredLines": 269,
//         "totalLines": 582
//     },
//     "/core/org/apache/jmeter/engineTreeCloner.java": {
//         "coveredLines": 96,
//         "totalLines": 105
//     },
//     "/core/org/apache/jmeter/engineTreeClonerNoTimer.java": {
//         "coveredLines": 19,
//         "totalLines": 54
//     },
//     "/core/org/apache/jmeter/engineTurnElementsOn.java": {
//         "coveredLines": 14,
//         "totalLines": 56
//     },
//     "/core/org/apache/jmeter/enginepackage-info.java": {
//         "coveredLines": 12,
//         "totalLines": 23
//     },
//     "/core/org/apache/jmeter/engine/utilAbstractTransformer.java": {
//         "coveredLines": 16,
//         "totalLines": 51
//     },
//     "/core/org/apache/jmeter/engine/utilCompoundVariable.java": {
//         "coveredLines": 100,
//         "totalLines": 241
//     },
//     "/core/org/apache/jmeter/engine/utilConfigMergabilityIndicator.java": {
//         "coveredLines": 1,
//         "totalLines": 37
//     },
//     "/core/org/apache/jmeter/engine/utilFunctionParser.java": {
//         "coveredLines": 148,
//         "totalLines": 246
//     },
//     "/core/org/apache/jmeter/engine/utilNoConfigMerge.java": {
//         "coveredLines": 29,
//         "totalLines": 31
//     },
//     "/core/org/apache/jmeter/engine/utilNoThreadClone.java": {
//         "coveredLines": 5,
//         "totalLines": 32
//     },
//     "/core/org/apache/jmeter/engine/utilReplaceFunctionsWithStrings.java": {
//         "coveredLines": 33,
//         "totalLines": 111
//     },
//     "/core/org/apache/jmeter/engine/utilReplaceStringWithFunctions.java": {
//         "coveredLines": 51,
//         "totalLines": 53
//     },
//     "/core/org/apache/jmeter/engine/utilSimpleVariable.java": {
//         "coveredLines": 18,
//         "totalLines": 69
//     },
//     "/core/org/apache/jmeter/engine/utilUndoVariableReplacement.java": {
//         "coveredLines": 33,
//         "totalLines": 52
//     },
//     "/core/org/apache/jmeter/engine/utilValueReplacer.java": {
//         "coveredLines": 42,
//         "totalLines": 199
//     },
//     "/core/org/apache/jmeter/engine/utilValueTransformer.java": {
//         "coveredLines": 17,
//         "totalLines": 57
//     },
//     "/core/org/apache/jmeter/engine/eventLoopIterationEvent.java": {
//         "coveredLines": 30,
//         "totalLines": 55
//     },
//     "/core/org/apache/jmeter/engine/eventLoopIterationListener.java": {
//         "coveredLines": 3,
//         "totalLines": 31
//     },
//     "/core/org/apache/jmeter/controlController.java": {
//         "coveredLines": 34,
//         "totalLines": 71
//     },
//     "/core/org/apache/jmeter/controlGenericController.java": {
//         "coveredLines": 386,
//         "totalLines": 428
//     },
//     "/core/org/apache/jmeter/controlIfController.java": {
//         "coveredLines": 236,
//         "totalLines": 290
//     },
//     "/core/org/apache/jmeter/controlLoopController.java": {
//         "coveredLines": 18,
//         "totalLines": 197
//     },
//     "/core/org/apache/jmeter/controlNextIsNullException.java": {
//         "coveredLines": 31,
//         "totalLines": 46
//     },
//     "/core/org/apache/jmeter/controlReplaceableController.java": {
//         "coveredLines": 41,
//         "totalLines": 48
//     },
//     "/core/org/apache/jmeter/controlRunTime.java": {
//         "coveredLines": 43,
//         "totalLines": 137
//     },
//     "/core/org/apache/jmeter/controlTestFragmentController.java": {
//         "coveredLines": 10,
//         "totalLines": 27
//     },
//     "/core/org/apache/jmeter/controlTransactionController.java": {
//         "coveredLines": 344,
//         "totalLines": 366
//     },
//     "/core/org/apache/jmeter/controlTransactionSampler.java": {
//         "coveredLines": 58,
//         "totalLines": 155
//     },
//     "/core/org/apache/jmeter/controlWhileController.java": {
//         "coveredLines": 79,
//         "totalLines": 132
//     },
//     "/core/org/apache/jmeter/control/guiAbstractControllerGui.java": {
//         "coveredLines": 27,
//         "totalLines": 65
//     },
//     "/core/org/apache/jmeter/control/guiIfControllerPanel.java": {
//         "coveredLines": 104,
//         "totalLines": 196
//     },
//     "/core/org/apache/jmeter/control/guiLogicControllerGui.java": {
//         "coveredLines": 17,
//         "totalLines": 67
//     },
//     "/core/org/apache/jmeter/control/guiLoopControlPanel.java": {
//         "coveredLines": 166,
//         "totalLines": 268
//     },
//     "/core/org/apache/jmeter/control/guiRunTimeGui.java": {
//         "coveredLines": 39,
//         "totalLines": 228
//     },
//     "/core/org/apache/jmeter/control/guiTestFragmentControllerGui.java": {
//         "coveredLines": 69,
//         "totalLines": 85
//     },
//     "/core/org/apache/jmeter/control/guiTestPlanGui.java": {
//         "coveredLines": 84,
//         "totalLines": 205
//     },
//     "/core/org/apache/jmeter/control/guiTransactionControllerGui.java": {
//         "coveredLines": 29,
//         "totalLines": 90
//     },
//     "/core/org/apache/jmeter/control/guiWhileControllerGui.java": {
//         "coveredLines": 11,
//         "totalLines": 148
//     },
//     "/core/org/apache/jmeter/control/guiWorkBenchGui.java": {
//         "coveredLines": 110,
//         "totalLines": 158
//     },
//     "/core/org/apache/jmeter/configArgument.java": {
//         "coveredLines": 147,
//         "totalLines": 215
//     },
//     "/core/org/apache/jmeter/configArguments.java": {
//         "coveredLines": 151,
//         "totalLines": 305
//     },
//     "/core/org/apache/jmeter/configConfigElement.java": {
//         "coveredLines": 5,
//         "totalLines": 51
//     },
//     "/core/org/apache/jmeter/configConfigTestElement.java": {
//         "coveredLines": 48,
//         "totalLines": 58
//     },
//     "/core/org/apache/jmeter/configLoginConfig.java": {
//         "coveredLines": 11,
//         "totalLines": 79
//     },
//     "/core/org/apache/jmeter/config/guiAbstractConfigGui.java": {
//         "coveredLines": 2,
//         "totalLines": 66
//     },
//     "/core/org/apache/jmeter/config/guiArgumentsPanel.java": {
//         "coveredLines": 482,
//         "totalLines": 733
//     },
//     "/core/org/apache/jmeter/config/guiLoginConfigGui.java": {
//         "coveredLines": 150,
//         "totalLines": 170
//     },
//     "/core/org/apache/jmeter/config/guiObsoleteGui.java": {
//         "coveredLines": 68,
//         "totalLines": 77
//     },
//     "/core/org/apache/jmeter/config/guiRowDetailDialog.java": {
//         "coveredLines": 124,
//         "totalLines": 265
//     },
//     "/core/org/apache/jmeter/config/guiSimpleConfigGui.java": {
//         "coveredLines": 30,
//         "totalLines": 307
//     },
//     "/core/org/apache/jmeter/assertionsAssertion.java": {
//         "coveredLines": 12,
//         "totalLines": 44
//     },
//     "/core/org/apache/jmeter/assertionsAssertionResult.java": {
//         "coveredLines": 122,
//         "totalLines": 177
//     },
//     "/core/org/apache/jmeter/assertionsCompareAssertionResult.java": {
//         "coveredLines": 28,
//         "totalLines": 95
//     },
//     "/core/org/apache/jmeter/assertions/guiAbstractAssertionGui.java": {
//         "coveredLines": 37,
//         "totalLines": 54
//     },
//     "/components/org/apache/jmeter/visualizersAccumListener.java": {
//         "coveredLines": 14,
//         "totalLines": 24
//     },
//     "/components/org/apache/jmeter/visualizersAssertionVisualizer.java": {
//         "coveredLines": 12,
//         "totalLines": 123
//     },
//     "/components/org/apache/jmeter/visualizersAxisGraph.java": {
//         "coveredLines": 421,
//         "totalLines": 436
//     },
//     "/components/org/apache/jmeter/visualizersBSFListener.java": {
//         "coveredLines": 48,
//         "totalLines": 80
//     },
//     "/components/org/apache/jmeter/visualizersBSFListenerBeanInfo.java": {
//         "coveredLines": 16,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/visualizersBarGraph.java": {
//         "coveredLines": 8,
//         "totalLines": 88
//     },
//     "/components/org/apache/jmeter/visualizersBeanShellListener.java": {
//         "coveredLines": 34,
//         "totalLines": 87
//     },
//     "/components/org/apache/jmeter/visualizersBeanShellListenerBeanInfo.java": {
//         "coveredLines": 8,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/visualizersComparisonVisualizer.java": {
//         "coveredLines": 25,
//         "totalLines": 175
//     },
//     "/components/org/apache/jmeter/visualizersGraph.java": {
//         "coveredLines": 219,
//         "totalLines": 263
//     },
//     "/components/org/apache/jmeter/visualizersGraphListener.java": {
//         "coveredLines": 2,
//         "totalLines": 25
//     },
//     "/components/org/apache/jmeter/visualizersGraphVisualizer.java": {
//         "coveredLines": 144,
//         "totalLines": 464
//     },
//     "/components/org/apache/jmeter/visualizersJSR223Listener.java": {
//         "coveredLines": 43,
//         "totalLines": 75
//     },
//     "/components/org/apache/jmeter/visualizersJSR223ListenerBeanInfo.java": {
//         "coveredLines": 8,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/visualizersLineGraph.java": {
//         "coveredLines": 6,
//         "totalLines": 267
//     },
//     "/components/org/apache/jmeter/visualizersMailerVisualizer.java": {
//         "coveredLines": 217,
//         "totalLines": 449
//     },
//     "/components/org/apache/jmeter/visualizersPropertyControlGui.java": {
//         "coveredLines": 157,
//         "totalLines": 221
//     },
//     "/components/org/apache/jmeter/visualizersRenderAsCssJQuery.java": {
//         "coveredLines": 123,
//         "totalLines": 288
//     },
//     "/components/org/apache/jmeter/visualizersRenderAsDocument.java": {
//         "coveredLines": 4,
//         "totalLines": 58
//     },
//     "/components/org/apache/jmeter/visualizersRenderAsHTML.java": {
//         "coveredLines": 88,
//         "totalLines": 159
//     },
//     "/components/org/apache/jmeter/visualizersRenderAsHTMLFormatted.java": {
//         "coveredLines": 14,
//         "totalLines": 51
//     },
//     "/components/org/apache/jmeter/visualizersRenderAsHTMLWithEmbedded.java": {
//         "coveredLines": 12,
//         "totalLines": 41
//     },
//     "/components/org/apache/jmeter/visualizersRenderAsJSON.java": {
//         "coveredLines": 19,
//         "totalLines": 134
//     },
//     "/components/org/apache/jmeter/visualizersRenderAsRegexp.java": {
//         "coveredLines": 36,
//         "totalLines": 255
//     },
//     "/components/org/apache/jmeter/visualizersRenderAsText.java": {
//         "coveredLines": 18,
//         "totalLines": 50
//     },
//     "/components/org/apache/jmeter/visualizersRenderAsXML.java": {
//         "coveredLines": 116,
//         "totalLines": 235
//     },
//     "/components/org/apache/jmeter/visualizersRenderAsXPath.java": {
//         "coveredLines": 116,
//         "totalLines": 302
//     },
//     "/components/org/apache/jmeter/visualizersRequestPanel.java": {
//         "coveredLines": 42,
//         "totalLines": 120
//     },
//     "/components/org/apache/jmeter/visualizersRequestView.java": {
//         "coveredLines": 5,
//         "totalLines": 60
//     },
//     "/components/org/apache/jmeter/visualizersRequestViewRaw.java": {
//         "coveredLines": 114,
//         "totalLines": 115
//     },
//     "/components/org/apache/jmeter/visualizersRespTimeGraphChart.java": {
//         "coveredLines": 358,
//         "totalLines": 414
//     },
//     "/components/org/apache/jmeter/visualizersRespTimeGraphDataBean.java": {
//         "coveredLines": 12,
//         "totalLines": 94
//     },
//     "/components/org/apache/jmeter/visualizersRespTimeGraphLineBean.java": {
//         "coveredLines": 4,
//         "totalLines": 70
//     },
//     "/components/org/apache/jmeter/visualizersRespTimeGraphVisualizer.java": {
//         "coveredLines": 487,
//         "totalLines": 973
//     },
//     "/components/org/apache/jmeter/visualizersResultRenderer.java": {
//         "coveredLines": 37,
//         "totalLines": 62
//     },
//     "/components/org/apache/jmeter/visualizersSamplerResultTab.java": {
//         "coveredLines": 558,
//         "totalLines": 569
//     },
//     "/components/org/apache/jmeter/visualizersSearchTextExtension.java": {
//         "coveredLines": 103,
//         "totalLines": 347
//     },
//     "/components/org/apache/jmeter/visualizersSearchTreePanel.java": {
//         "coveredLines": 94,
//         "totalLines": 186
//     },
//     "/components/org/apache/jmeter/visualizersSearchableTreeNode.java": {
//         "coveredLines": 7,
//         "totalLines": 99
//     },
//     "/components/org/apache/jmeter/visualizersSimpleDataWriter.java": {
//         "coveredLines": 25,
//         "totalLines": 71
//     },
//     "/components/org/apache/jmeter/visualizersSpline3.java": {
//         "coveredLines": 29,
//         "totalLines": 439
//     },
//     "/components/org/apache/jmeter/visualizersSplineModel.java": {
//         "coveredLines": 96,
//         "totalLines": 136
//     },
//     "/components/org/apache/jmeter/visualizersStatGraphProperties.java": {
//         "coveredLines": 11,
//         "totalLines": 73
//     },
//     "/components/org/apache/jmeter/visualizersStatGraphVisualizer.java": {
//         "coveredLines": 488,
//         "totalLines": 994
//     },
//     "/components/org/apache/jmeter/visualizersStatVisualizer.java": {
//         "coveredLines": 130,
//         "totalLines": 225
//     },
//     "/components/org/apache/jmeter/visualizersSummaryReport.java": {
//         "coveredLines": 68,
//         "totalLines": 289
//     },
//     "/components/org/apache/jmeter/visualizersTableVisualizer.java": {
//         "coveredLines": 41,
//         "totalLines": 349
//     },
//     "/components/org/apache/jmeter/visualizersTreeNodeRenderer.java": {
//         "coveredLines": 13,
//         "totalLines": 72
//     },
//     "/components/org/apache/jmeter/visualizersViewResultsFullVisualizer.java": {
//         "coveredLines": 134,
//         "totalLines": 470
//     },
//     "/components/org/apache/jmeter/visualizersXMLDefaultMutableTreeNode.java": {
//         "coveredLines": 63,
//         "totalLines": 210
//     },
//     "/components/org/apache/jmeter/visualizers/utilsColors.java": {
//         "coveredLines": 77,
//         "totalLines": 96
//     },
//     "/components/org/apache/jmeter/visualizers/backendAbstractBackendListenerClient.java": {
//         "coveredLines": 38,
//         "totalLines": 127
//     },
//     "/components/org/apache/jmeter/visualizers/backendBackendListener.java": {
//         "coveredLines": 341,
//         "totalLines": 492
//     },
//     "/components/org/apache/jmeter/visualizers/backendBackendListenerClient.java": {
//         "coveredLines": 93,
//         "totalLines": 128
//     },
//     "/components/org/apache/jmeter/visualizers/backendBackendListenerContext.java": {
//         "coveredLines": 169,
//         "totalLines": 236
//     },
//     "/components/org/apache/jmeter/visualizers/backendBackendListenerGui.java": {
//         "coveredLines": 219,
//         "totalLines": 283
//     },
//     "/components/org/apache/jmeter/visualizers/backendSamplerMetric.java": {
//         "coveredLines": 88,
//         "totalLines": 255
//     },
//     "/components/org/apache/jmeter/visualizers/backendUserMetric.java": {
//         "coveredLines": 18,
//         "totalLines": 93
//     },
//     "/components/org/apache/jmeter/visualizers/backend/graphiteAbstractGraphiteMetricsSender.java": {
//         "coveredLines": 59,
//         "totalLines": 70
//     },
//     "/components/org/apache/jmeter/visualizers/backend/graphiteGraphiteBackendListenerClient.java": {
//         "coveredLines": 13,
//         "totalLines": 345
//     },
//     "/components/org/apache/jmeter/visualizers/backend/graphiteGraphiteMetricsSender.java": {
//         "coveredLines": 9,
//         "totalLines": 74
//     },
//     "/components/org/apache/jmeter/visualizers/backend/graphitePickleGraphiteMetricsSender.java": {
//         "coveredLines": 12,
//         "totalLines": 182
//     },
//     "/components/org/apache/jmeter/visualizers/backend/graphiteSocketConnectionInfos.java": {
//         "coveredLines": 2,
//         "totalLines": 63
//     },
//     "/components/org/apache/jmeter/visualizers/backend/graphiteSocketOutputStream.java": {
//         "coveredLines": 4,
//         "totalLines": 59
//     },
//     "/components/org/apache/jmeter/visualizers/backend/graphiteSocketOutputStreamPoolFactory.java": {
//         "coveredLines": 83,
//         "totalLines": 86
//     },
//     "/components/org/apache/jmeter/visualizers/backend/graphiteTextGraphiteMetricsSender.java": {
//         "coveredLines": 104,
//         "totalLines": 125
//     },
//     "/components/org/apache/jmeter/validationComponentTreeClonerForValidation.java": {
//         "coveredLines": 48,
//         "totalLines": 58
//     },
//     "/components/org/apache/jmeter/timersBSFTimer.java": {
//         "coveredLines": 38,
//         "totalLines": 55
//     },
//     "/components/org/apache/jmeter/timersBSFTimerBeanInfo.java": {
//         "coveredLines": 17,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/timersBeanShellTimer.java": {
//         "coveredLines": 28,
//         "totalLines": 65
//     },
//     "/components/org/apache/jmeter/timersBeanShellTimerBeanInfo.java": {
//         "coveredLines": 9,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/timersConstantThroughputTimer.java": {
//         "coveredLines": 136,
//         "totalLines": 332
//     },
//     "/components/org/apache/jmeter/timersConstantThroughputTimerBeanInfo.java": {
//         "coveredLines": 45,
//         "totalLines": 46
//     },
//     "/components/org/apache/jmeter/timersConstantTimer.java": {
//         "coveredLines": 99,
//         "totalLines": 112
//     },
//     "/components/org/apache/jmeter/timersGaussianRandomTimer.java": {
//         "coveredLines": 0,
//         "totalLines": 43
//     },
//     "/components/org/apache/jmeter/timersJSR223Timer.java": {
//         "coveredLines": 28,
//         "totalLines": 53
//     },
//     "/components/org/apache/jmeter/timersJSR223TimerBeanInfo.java": {
//         "coveredLines": 0,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/timersPoissonRandomTimer.java": {
//         "coveredLines": 205,
//         "totalLines": 390
//     },
//     "/components/org/apache/jmeter/timersRandomTimer.java": {
//         "coveredLines": 65,
//         "totalLines": 81
//     },
//     "/components/org/apache/jmeter/timersSyncTimer.java": {
//         "coveredLines": 270,
//         "totalLines": 278
//     },
//     "/components/org/apache/jmeter/timersSyncTimerBeanInfo.java": {
//         "coveredLines": 24,
//         "totalLines": 42
//     },
//     "/components/org/apache/jmeter/timersUniformRandomTimer.java": {
//         "coveredLines": 25,
//         "totalLines": 44
//     },
//     "/components/org/apache/jmeter/timers/guiAbstractRandomTimerGui.java": {
//         "coveredLines": 127,
//         "totalLines": 195
//     },
//     "/components/org/apache/jmeter/timers/guiConstantTimerGui.java": {
//         "coveredLines": 110,
//         "totalLines": 134
//     },
//     "/components/org/apache/jmeter/timers/guiGaussianRandomTimerGui.java": {
//         "coveredLines": 21,
//         "totalLines": 91
//     },
//     "/components/org/apache/jmeter/timers/guiPoissonRandomTimerGui.java": {
//         "coveredLines": 44,
//         "totalLines": 69
//     },
//     "/components/org/apache/jmeter/timers/guiUniformRandomTimerGui.java": {
//         "coveredLines": 20,
//         "totalLines": 92
//     },
//     "/components/org/apache/jmeter/samplerDebugSampler.java": {
//         "coveredLines": 3,
//         "totalLines": 144
//     },
//     "/components/org/apache/jmeter/samplerDebugSamplerBeanInfo.java": {
//         "coveredLines": 24,
//         "totalLines": 48
//     },
//     "/components/org/apache/jmeter/samplerTestAction.java": {
//         "coveredLines": 110,
//         "totalLines": 174
//     },
//     "/components/org/apache/jmeter/sampler/guiTestActionGui.java": {
//         "coveredLines": 159,
//         "totalLines": 255
//     },
//     "/components/org/apache/jmeter/reportersMailerModel.java": {
//         "coveredLines": 405,
//         "totalLines": 529
//     },
//     "/components/org/apache/jmeter/reportersMailerResultCollector.java": {
//         "coveredLines": 10,
//         "totalLines": 54
//     },
//     "/components/org/apache/jmeter/modifiersBSFPreProcessor.java": {
//         "coveredLines": 45,
//         "totalLines": 50
//     },
//     "/components/org/apache/jmeter/modifiersBSFPreProcessorBeanInfo.java": {
//         "coveredLines": 6,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/modifiersBeanShellPreProcessor.java": {
//         "coveredLines": 49,
//         "totalLines": 64
//     },
//     "/components/org/apache/jmeter/modifiersBeanShellPreProcessorBeanInfo.java": {
//         "coveredLines": 25,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/modifiersCounterConfig.java": {
//         "coveredLines": 193,
//         "totalLines": 241
//     },
//     "/components/org/apache/jmeter/modifiersJSR223PreProcessor.java": {
//         "coveredLines": 12,
//         "totalLines": 47
//     },
//     "/components/org/apache/jmeter/modifiersJSR223PreProcessorBeanInfo.java": {
//         "coveredLines": 16,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/modifiersSampleTimeout.java": {
//         "coveredLines": 110,
//         "totalLines": 197
//     },
//     "/components/org/apache/jmeter/modifiersUserParameters.java": {
//         "coveredLines": 135,
//         "totalLines": 203
//     },
//     "/components/org/apache/jmeter/modifiers/guiCounterConfigGui.java": {
//         "coveredLines": 132,
//         "totalLines": 156
//     },
//     "/components/org/apache/jmeter/modifiers/guiSampleTimeoutGui.java": {
//         "coveredLines": 105,
//         "totalLines": 133
//     },
//     "/components/org/apache/jmeter/modifiers/guiUserParametersGui.java": {
//         "coveredLines": 191,
//         "totalLines": 394
//     },
//     "/components/org/apache/jmeter/extractorBSFPostProcessor.java": {
//         "coveredLines": 42,
//         "totalLines": 49
//     },
//     "/components/org/apache/jmeter/extractorBSFPostProcessorBeanInfo.java": {
//         "coveredLines": 22,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/extractorBeanShellPostProcessor.java": {
//         "coveredLines": 56,
//         "totalLines": 69
//     },
//     "/components/org/apache/jmeter/extractorBeanShellPostProcessorBeanInfo.java": {
//         "coveredLines": 7,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/extractorDebugPostProcessor.java": {
//         "coveredLines": 79,
//         "totalLines": 157
//     },
//     "/components/org/apache/jmeter/extractorDebugPostProcessorBeanInfo.java": {
//         "coveredLines": 32,
//         "totalLines": 57
//     },
//     "/components/org/apache/jmeter/extractorExtractor.java": {
//         "coveredLines": 32,
//         "totalLines": 48
//     },
//     "/components/org/apache/jmeter/extractorHtmlExtractor.java": {
//         "coveredLines": 21,
//         "totalLines": 332
//     },
//     "/components/org/apache/jmeter/extractorJSR223PostProcessor.java": {
//         "coveredLines": 36,
//         "totalLines": 47
//     },
//     "/components/org/apache/jmeter/extractorJSR223PostProcessorBeanInfo.java": {
//         "coveredLines": 23,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/extractorJSoupExtractor.java": {
//         "coveredLines": 21,
//         "totalLines": 95
//     },
//     "/components/org/apache/jmeter/extractorJoddExtractor.java": {
//         "coveredLines": 5,
//         "totalLines": 100
//     },
//     "/components/org/apache/jmeter/extractorRegexExtractor.java": {
//         "coveredLines": 386,
//         "totalLines": 524
//     },
//     "/components/org/apache/jmeter/extractorXPathExtractor.java": {
//         "coveredLines": 176,
//         "totalLines": 342
//     },
//     "/components/org/apache/jmeter/extractor/json/renderRenderAsJsonRenderer.java": {
//         "coveredLines": 250,
//         "totalLines": 265
//     },
//     "/components/org/apache/jmeter/extractor/json/jsonpathJSONManager.java": {
//         "coveredLines": 71,
//         "totalLines": 109
//     },
//     "/components/org/apache/jmeter/extractor/json/jsonpathJSONPostProcessor.java": {
//         "coveredLines": 73,
//         "totalLines": 261
//     },
//     "/components/org/apache/jmeter/extractor/json/jsonpath/guiJSONPostProcessorGui.java": {
//         "coveredLines": 181,
//         "totalLines": 186
//     },
//     "/components/org/apache/jmeter/extractor/guiHtmlExtractorGui.java": {
//         "coveredLines": 93,
//         "totalLines": 251
//     },
//     "/components/org/apache/jmeter/extractor/guiRegexExtractorGui.java": {
//         "coveredLines": 65,
//         "totalLines": 291
//     },
//     "/components/org/apache/jmeter/extractor/guiXPathExtractorGui.java": {
//         "coveredLines": 85,
//         "totalLines": 174
//     },
//     "/components/org/apache/jmeter/controlCriticalSectionController.java": {
//         "coveredLines": 66,
//         "totalLines": 205
//     },
//     "/components/org/apache/jmeter/controlForeachController.java": {
//         "coveredLines": 127,
//         "totalLines": 284
//     },
//     "/components/org/apache/jmeter/controlIncludeController.java": {
//         "coveredLines": 62,
//         "totalLines": 206
//     },
//     "/components/org/apache/jmeter/controlInterleaveControl.java": {
//         "coveredLines": 27,
//         "totalLines": 201
//     },
//     "/components/org/apache/jmeter/controlModuleController.java": {
//         "coveredLines": 13,
//         "totalLines": 224
//     },
//     "/components/org/apache/jmeter/controlOnceOnlyController.java": {
//         "coveredLines": 41,
//         "totalLines": 59
//     },
//     "/components/org/apache/jmeter/controlRandomController.java": {
//         "coveredLines": 17,
//         "totalLines": 54
//     },
//     "/components/org/apache/jmeter/controlRandomOrderController.java": {
//         "coveredLines": 40,
//         "totalLines": 60
//     },
//     "/components/org/apache/jmeter/controlSwitchController.java": {
//         "coveredLines": 86,
//         "totalLines": 135
//     },
//     "/components/org/apache/jmeter/controlThroughputController.java": {
//         "coveredLines": 20,
//         "totalLines": 286
//     },
//     "/components/org/apache/jmeter/control/guiCriticalSectionControllerGui.java": {
//         "coveredLines": 22,
//         "totalLines": 182
//     },
//     "/components/org/apache/jmeter/control/guiForeachControlPanel.java": {
//         "coveredLines": 247,
//         "totalLines": 252
//     },
//     "/components/org/apache/jmeter/control/guiIncludeControllerGui.java": {
//         "coveredLines": 111,
//         "totalLines": 114
//     },
//     "/components/org/apache/jmeter/control/guiInterleaveControlGui.java": {
//         "coveredLines": 18,
//         "totalLines": 104
//     },
//     "/components/org/apache/jmeter/control/guiModuleControllerGui.java": {
//         "coveredLines": 149,
//         "totalLines": 500
//     },
//     "/components/org/apache/jmeter/control/guiOnceOnlyControllerGui.java": {
//         "coveredLines": 11,
//         "totalLines": 59
//     },
//     "/components/org/apache/jmeter/control/guiRandomControlGui.java": {
//         "coveredLines": 54,
//         "totalLines": 93
//     },
//     "/components/org/apache/jmeter/control/guiRandomOrderControllerGui.java": {
//         "coveredLines": 32,
//         "totalLines": 53
//     },
//     "/components/org/apache/jmeter/control/guiSwitchControllerGui.java": {
//         "coveredLines": 23,
//         "totalLines": 99
//     },
//     "/components/org/apache/jmeter/control/guiThroughputControllerGui.java": {
//         "coveredLines": 111,
//         "totalLines": 175
//     },
//     "/components/org/apache/jmeter/control/guiTreeNodeWrapper.java": {
//         "coveredLines": 32,
//         "totalLines": 53
//     },
//     "/components/org/apache/jmeter/configCSVDataSet.java": {
//         "coveredLines": 79,
//         "totalLines": 313
//     },
//     "/components/org/apache/jmeter/configCSVDataSetBeanInfo.java": {
//         "coveredLines": 51,
//         "totalLines": 109
//     },
//     "/components/org/apache/jmeter/configKeystoreConfig.java": {
//         "coveredLines": 36,
//         "totalLines": 158
//     },
//     "/components/org/apache/jmeter/configKeystoreConfigBeanInfo.java": {
//         "coveredLines": 17,
//         "totalLines": 64
//     },
//     "/components/org/apache/jmeter/configRandomVariableConfig.java": {
//         "coveredLines": 236,
//         "totalLines": 243
//     },
//     "/components/org/apache/jmeter/configRandomVariableConfigBeanInfo.java": {
//         "coveredLines": 64,
//         "totalLines": 78
//     },
//     "/components/org/apache/jmeter/assertionsBSFAssertion.java": {
//         "coveredLines": 41,
//         "totalLines": 57
//     },
//     "/components/org/apache/jmeter/assertionsBSFAssertionBeanInfo.java": {
//         "coveredLines": 20,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/assertionsBeanShellAssertion.java": {
//         "coveredLines": 44,
//         "totalLines": 133
//     },
//     "/components/org/apache/jmeter/assertionsCompareAssertion.java": {
//         "coveredLines": 131,
//         "totalLines": 212
//     },
//     "/components/org/apache/jmeter/assertionsCompareAssertionBeanInfo.java": {
//         "coveredLines": 44,
//         "totalLines": 56
//     },
//     "/components/org/apache/jmeter/assertionsDurationAssertion.java": {
//         "coveredLines": 37,
//         "totalLines": 73
//     },
//     "/components/org/apache/jmeter/assertionsHTMLAssertion.java": {
//         "coveredLines": 183,
//         "totalLines": 386
//     },
//     "/components/org/apache/jmeter/assertionsJSR223Assertion.java": {
//         "coveredLines": 2,
//         "totalLines": 56
//     },
//     "/components/org/apache/jmeter/assertionsJSR223AssertionBeanInfo.java": {
//         "coveredLines": 6,
//         "totalLines": 29
//     },
//     "/components/org/apache/jmeter/assertionsMD5HexAssertion.java": {
//         "coveredLines": 71,
//         "totalLines": 109
//     },
//     "/components/org/apache/jmeter/assertionsResponseAssertion.java": {
//         "coveredLines": 386,
//         "totalLines": 515
//     },
//     "/components/org/apache/jmeter/assertionsSMIMEAssertion.java": {
//         "coveredLines": 163,
//         "totalLines": 375
//     },
//     "/components/org/apache/jmeter/assertionsSMIMEAssertionTestElement.java": {
//         "coveredLines": 132,
//         "totalLines": 154
//     },
//     "/components/org/apache/jmeter/assertionsSizeAssertion.java": {
//         "coveredLines": 256,
//         "totalLines": 264
//     },
//     "/components/org/apache/jmeter/assertionsSubstitutionElement.java": {
//         "coveredLines": 8,
//         "totalLines": 55
//     },
//     "/components/org/apache/jmeter/assertionsXMLAssertion.java": {
//         "coveredLines": 85,
//         "totalLines": 96
//     },
//     "/components/org/apache/jmeter/assertionsXMLSchemaAssertion.java": {
//         "coveredLines": 86,
//         "totalLines": 214
//     },
//     "/components/org/apache/jmeter/assertionsXPathAssertion.java": {
//         "coveredLines": 215,
//         "totalLines": 275
//     },
//     "/components/org/apache/jmeter/assertions/guiAssertionGui.java": {
//         "coveredLines": 326,
//         "totalLines": 500
//     },
//     "/components/org/apache/jmeter/assertions/guiBeanShellAssertionGui.java": {
//         "coveredLines": 99,
//         "totalLines": 170
//     },
//     "/components/org/apache/jmeter/assertions/guiDurationAssertionGui.java": {
//         "coveredLines": 78,
//         "totalLines": 124
//     },
//     "/components/org/apache/jmeter/assertions/guiHTMLAssertionGui.java": {
//         "coveredLines": 281,
//         "totalLines": 371
//     },
//     "/components/org/apache/jmeter/assertions/guiMD5HexAssertionGUI.java": {
//         "coveredLines": 32,
//         "totalLines": 119
//     },
//     "/components/org/apache/jmeter/assertions/guiSMIMEAssertionGui.java": {
//         "coveredLines": 165,
//         "totalLines": 250
//     },
//     "/components/org/apache/jmeter/assertions/guiSizeAssertionGui.java": {
//         "coveredLines": 32,
//         "totalLines": 305
//     },
//     "/components/org/apache/jmeter/assertions/guiXMLAssertionGui.java": {
//         "coveredLines": 43,
//         "totalLines": 69
//     },
//     "/components/org/apache/jmeter/assertions/guiXMLConfPanel.java": {
//         "coveredLines": 156,
//         "totalLines": 165
//     },
//     "/components/org/apache/jmeter/assertions/guiXMLSchemaAssertionGUI.java": {
//         "coveredLines": 79,
//         "totalLines": 145
//     },
//     "/components/org/apache/jmeter/assertions/guiXPathAssertionGui.java": {
//         "coveredLines": 131,
//         "totalLines": 134
//     },
//     "/components/org/apache/jmeter/assertions/guiXPathPanel.java": {
//         "coveredLines": 218,
//         "totalLines": 222
//     }
// };
// let resultObj = {};
//
// _.mapKeys(sourceData, (value, key, object) => {
//     let keyArr = key.split("/");
//     let fileName = keyArr[keyArr.length - 1];
//     keyArr.splice(keyArr.length - 1, 1);   //remove last - filename
//
//     let next;
//     let k1 = keyArr[keyArr.length - 1];
//     let initial = { [k1]: { [fileName]: value } };
//
//     for (let i = keyArr.length; i > 1; i--) {
//         let nextKey = keyArr[i - 2];
//         next = { [nextKey]: initial };
//
//         var deep = _.cloneDeep(next);
//         initial = deep;
//     }
//     resultObj = _.merge(resultObj, initial);
// });
// console.log(resultObj);
export default sourceData;
