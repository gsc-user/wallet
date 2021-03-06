@extends("layout")
@section("content")
    <div class="faq-container">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>
            <div class="row list">
                <div class="col-12">
                    <section class="section-row">
                        <div class="fs-30 section-title padding-top-30 padding-bottom-10">General Information</div>
                        <ul>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">01</span>What can Dentacoin Wallet do?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">
                                    <ul>
                                        <li>Create a Dentacoin wallet easy and fast</li>
                                        <li>Access your Dentacoin wallet with the generated Secret Key File</li>
                                        <li>Send and receive Dentacoin tokens</li>
                                        <li>Receive but not send Ether (ETH), to cover your transaction costs</li>
                                        <li>Display the value of your stored Dentacoin in USD</li>
                                        <li>Show details of all of your ingoing/outgoing transactions</li>
                                        <li>Purchase Dentacoin with a card from our partners Indacoin, directly from the wallet</li>
                                        <li>Use your device's camera to scan addresses via QR codes</li>
                                        <li>Read address QR codes in the form of a screenshot, or a photo</li>
                                        <li>Access your wallet with MetaMask, Trust Wallet </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">02</span>Which platforms support Dentacoin Wallet?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">Dentacoin Wallet is currently available on web and mobile, as well as via the following third parties: MetaMask, Trust Wallet and other wallet apps, with a built-in dApp browser.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">03</span>What information can I see in the transaction details?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">
                                    <ul>
                                        <li>The amount sent or received both in crypto and USD</li>
                                        <li>The date and time of the transaction</li>
                                        <li>The send and receive address</li>
                                        <li>The transaction hash (unique transaction identificator)</li>
                                        <li>The link to your transaction on Etherscan.io</li>
                                        <li>Confirmation status (via Etherscan link)</li>
                                        <li>Any fees associated with the transaction (via Etherscan link)</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">04</span>What cryptocurrencies are supported in Dentacoin Wallet?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">
                                    Currently, we support the following list:
                                    <ul>
                                        <li>Dentacoin (send & receive)</li>
                                        <li>Ether (receive only)</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">05</span>Are you open-source?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">
                                    Yes, Dentacoin Wallet is open source. The code can be found in its dedicated GitHub repository at <a href="https://github.com/Dentacoin/wallet" target="_blank">https://github.com/Dentacoin/wallet</a>.
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section class="section-row">
                        <div class="fs-30 section-title padding-top-30 padding-bottom-10">Getting Started</div>
                        <ul>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">01</span>How do I create a Dentacoin Wallet?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">You can create a Dentacoin Wallet by simply generating a Secret Key File. To create a wallet type in your desired password in the create section, then click the “Create” button. You will be prompted to download a Keystore/Secret Key File. A Secret Key File contains all your login information, but its contents are encrypted with your password. Without either one you will not be able to access your wallet. Make sure you store the file in a safe and secure place - that’s the only way to access your wallet and only you are responsible for it. We do not store any user access details.
                                    <div class="container-fluid padding-top-15">
                                        <div class="row fs-0">
                                            <figure itemscope="" itemtype="http://schema.org/ImageObject" class="col-12 col-sm-6 inline-block-top"><img alt="" itemprop="contentUrl" src="/assets/images/1-faq.png" /></figure>
                                            <figure itemscope="" itemtype="http://schema.org/ImageObject" class="col-12 col-sm-6 inline-block-top"><img alt="" itemprop="contentUrl" src="/assets/images/2-faq.png" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">02</span>How do I log in a Dentacoin Wallet via the Secret Key File?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">Simply navigate to <a href="https://wallet.dentacoin.com/" target="_blank">https://wallet.dentacoin.com/</a> , click on the “Import” section and upload your Secret Key File. It should have a similar file name to “Dentacoin secret key - 0b77abd12b48d51a8a5d740d94b455b377886b72.” Once uploaded, input your password to successfully log in.
                                        <figure itemscope="" itemtype="http://schema.org/ImageObject" class="padding-top-15 text-center"><img alt="" itemprop="contentUrl" src="/assets/images/3-faq.png" /></figure>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">03</span>How do I receive coins in Dentacoin Wallet?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">In order to receive coins from any other address you should provide your Dentacoin address to the sender. To do so, you need to either copy and paste your address to the sender, or have them scan the QR code available in the “Wallet” section.
                                        <figure itemscope="" itemtype="http://schema.org/ImageObject" class="padding-top-15 text-center"><img alt="" itemprop="contentUrl" src="/assets/images/4-faq.png" /></figure>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">04</span>How do I send coins in Dentacoin Wallet?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">To send Dentacoin, navigate to the “Send” section. When you are there, you can either directly open the QR code scanner or paste the address where you would like to send your coins. Make sure to pay extra attention to the correctness of the receiving address, and never type it manually due to the high risk of making a mistake! Always double-check the address you are going to send Dentacoin to because you will not be able to cancel the transaction or request a refund.<br>
                                    Then you click “Next”. You will arrive at the screen where you can specify the amount you would like to send. You can type the amount of necessary Dentacoin in the “DCN” field you require or in USD (it will calculate the amount in chosen coin/token based on the current exchange rate).<br>
                                    The transaction fee is calculated automatically and is deducted from your Ethereum balance.
                                    Please double check if the “Send to” address is correct and if it is not, you can edit it by pressing the pencil button next to it. When you are ready clicking send will commit the transaction. There is no turning back at this point.
                                    <figure itemscope="" itemtype="http://schema.org/ImageObject" class="padding-top-15 text-center"><img alt="" itemprop="contentUrl" src="/assets/images/5-faq.png" /></figure>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">05</span>How do I purchase Dentacoin?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">To purchase Dentacoin directly from your wallet, please navigate to the “Buy” section. Inputting the amount of USD you are willing to commit on the left side will automatically calculate the amount of Dentacoin you will receive (including fees) under the “You get” field. The opposite works vice-versa - if you input the amount of Dentacoin you would like to receive the required amount of USD to make the purchase will automatically be calculated and shown in the “Pay with” field. Once you are satisfied with the amount you would like to commit/receive it is time to input the receiving address. If you would like to purchase Dentacoin for your own wallet, then the address field is automatically filled when you navigate to the “Buy” section, but you are free to edit the field if you’d like to receive it on another address. After that please input a valid email address, so you can begin the verification procedures needed to process your transaction. The final step before you can move forward is to read the Privacy Policy and tick the box, if you consent. Please double check that the information is correct and if you are certain it is, you can click the “Buy” button to begin the verification process.
                                    <figure itemscope="" itemtype="http://schema.org/ImageObject" class="padding-top-15 text-center"><img alt="" itemprop="contentUrl" src="/assets/images/6-faq.png" /></figure>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">06</span>How do I get verified to purchase Dentacoin with card?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">Once you have clicked the “Buy” button you will be taken to another page, where you can input a valid phone number. The phone number is needed to receive a 4 digit verification code. Keep in mind that the phone number should be associated with your card information. After you’ve input your phone number you will be taken to the next step, where you will be asked to provide a scan, or photo of your ID, Passport, or Driver’s License to complete the verification process. Additionally, you might be required to undergo video verification, where you record a video, by showing your face. These are all necessary steps for Indacoin to verify that you are the card holder and not someone using a stolen card. If you cannot record a video verification, you can open the same order page link from your mobile device and record it from there. If that is not possible, you can send the video over email to <a href="mailto:support@indacoin.com">support@indacoin.com</a> , but make sure you include your order number as well. Fortunately, once your card is verified, you will not need to do so, during your next purchase.</div>
                            </li>
                        </ul>
                    </section>
                    <section class="section-row">
                        <div class="fs-30 section-title padding-top-30 padding-bottom-10">Access & Security</div>
                        <ul>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">01</span>What is a Dentacoin address? How can I get it?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">A Dentacoin address is a unique string of letters and numbers that indicate where your wallet is on the blockchain. Your Dentacoin address is automatically generated when you sign up to a new wallet. We recommend you keep it secure. It is the equivalent of your IBAN and must be provided in order to receive, or withdraw to your wallet.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">02</span>Can I have two or more wallets?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">You can have two or even more wallets registered on the platform. All you have to do to switch is to click the “Forget this account” link at the bottom of the page and use your preferred login method to access another wallet. To switch back, follow the same procedure.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">03</span>If I have another wallet can I import it to the Dentacoin Wallet?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">No, but you can still access the Dentacoin Wallet, from another wallet with a built-in dApp browser, like Trust wallet. A dApp browser allows direct interfacing with a blockchain network, without the necessity of running a full node and having a copy of the network. It is the equivalent of your web browser (Chrome, Firefox, Opera, Internet Explorer, Edge, etc.), but for blockchain applications.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">04</span>What password should I enter?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">You should use the password you created when you signed up with the Secret Key File.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">05</span>What should I do if i forget my password?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">If you created your wallet via the Secret Key File and forgot your password, there is no way to restore your wallet.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">06</span>What should I do if i lost my Secret Key File?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">If you created your wallet via the Secret Key File and misplaced your Secret Key File, there is no way to restore your wallet.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">07</span>Why can I not log in?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">
                                    There are two reasons for this problem:
                                    <ul>
                                        <li>You tried to log in with the Secret Key File, but you forgot the password used to unlock it. If that’s the case it is not possible to recover your account.</li>
                                        <li>You lost the Secret Key File, but even if you remember the password used to unlock it, it is not possible to recover your account.</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section class="section-row">
                        <div class="fs-30 section-title padding-top-30 padding-bottom-10">Transactions & Fees</div>
                        <ul>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">01</span>What does a fee mean? Who do I pay to?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">Every time you send a transaction in Dentacoin you need to pay the network fee. This fee goes to miners who confirm your transaction. The fees are calculated automatically for Dentacoin Wallet transactions. Since Dentacoin is built on the Ethereum network, the transaction fees are paid with minute amounts of Ether called Ether gas. That is why in order to process a transaction you need to charge your Dentacoin wallet with Ether, beforehand.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">02</span>Can I cancel my transaction?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">If your transaction was sent to the blockchain and you see it on EtherScan, it means that it is waiting for a confirmation and cannot be cancelled. That is why we ask you to double check all information prior to committing a transaction.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">03</span>How long can a transaction be pending?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">It depends on the network load and different transactions require different amounts of time. Unless the network is overloaded most transactions are processed in a few minutes up to a few hours (medium load).</div>
                            </li>
                        </ul>
                    </section>
                    <section class="section-row">
                        <div class="fs-30 section-title padding-top-30 padding-bottom-10">Alternative Access: MetaMask</div>
                        <ul>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">01</span>How do I create a Dentacoin Wallet using MetaMask?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">First download the extension from the <a href="//metamask.io/" target="_blank">official site</a>. After successfully installing the extension, make sure it is turned on, then navigate to <a href="//wallet.dentacoin.com/" target="_blank">https://wallet.dentacoin.com/</a> . Click the little fox icon at the top right of your browser to open up the MetaMask extension and after agreeing to the Terms and Conditions, you will be prompted to create a new account. Make sure you have selected “Main Network” on the top left, type your desired password and click create to create your wallet.<br>
                                    To finalize the process, please write down, or save your seed phrase, as this is the only way to backup and restore your wallet, should you forget your password. If you forget your password and you lose your seed phrase you will lose all access to your account and it cannot be restored anymore. Make sure you keep it in a safe and secure place!
                                    <div class="container-fluid fs-0">
                                        <div class="row">
                                            <figure itemscope="" itemtype="http://schema.org/ImageObject" class="padding-top-15 text-center col-12 col-sm-6 inline-block-top"><img alt="" itemprop="contentUrl" src="/assets/images/7-faq.png" /></figure>
                                            <figure itemscope="" itemtype="http://schema.org/ImageObject" class="padding-top-15 text-center col-12 col-sm-6 inline-block-top"><img alt="" itemprop="contentUrl" src="/assets/images/8-faq.png" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">02</span>How do I log in a Dentacoin Wallet via MetaMask?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">Simply navigate to <a href="//wallet.dentacoin.com/" target="_blank">https://wallet.dentacoin.com/</a> , click on the MetaMask icon in the top left (little fox), input your password and refresh the wallet page. You have now successfully logged in.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">03</span>What password should I enter?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">You should use the password you created when you signed up for MetaMask.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">04</span>What should I do if i forget my password?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">In the case you’ve forgotten your MetaMask password, you can login with your seed phrase. Click the link “Import using account seed phrase,” and fill the gaps in the right order.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">05</span>What is a Seed Phrase?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">A seed phrase, or a mnemonic is a set of 12 words that serve as your backup password for MetaMask. Write a copy of each of these words carefully. You will then be required to retype all 12 words in the same order they appeared in to check the status and completeness of your backup. Store your copy of these 12 words (mnemonic) in a very safe and secure place, and never give it to anyone you don’t want to have access to your funds.<br>
                                    Never switch your wallet without having a Backup. The only way to get access to your funds is through your 12-word Backup Phrase. If you misplace your seed phrase, but still have access to your account, you can find them in the Metamask extension settings.
                                    <figure itemscope="" itemtype="http://schema.org/ImageObject" class="padding-top-15 text-center"><img alt="" itemprop="contentUrl" src="/assets/images/9-faq.png" /></figure>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">06</span>Why do I have to write down my Seed Phrase before switching wallets?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">We ask that you write down your 12-word seed phrase in the exact sequence it appeared before you exit your wallet as your funds and private key are tied to this unique Backup Phrase. Your 12-word seed Phrase allows you to restore your wallet and regain access to your funds at any time on any device that supports MetaMask. After switching wallets, you will not have any other way to access your funds except the 12-word backup phrase.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">07</span>I lost access to my wallet, and did not write down my Seed Phrase. Can I get my wallet back?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">No, you have completely lost access to your wallet. This is why we urge you to write it down.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">08</span>I forgot my password, what can I do?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">If you know your seed phrase, you can restore your account by clicking “Import using account seed phrase.” You will then be prompted to set a new password.
                                    <figure itemscope="" itemtype="http://schema.org/ImageObject" class="padding-top-15 text-center"><img alt="" itemprop="contentUrl" src="/assets/images/10-faq.png" /></figure>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">09</span>Why can I not recover my account with my seed phrase?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">Please, check whether you wrote down all the words in the correct order.</div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="fs-20 question"><span class="lato-black fs-20">10</span>Why can I not log in?</a>
                                <div class="fs-18 fs-xs-16 calibri-light padding-bottom-30 padding-top-10 padding-left-20 padding-right-20 question-content">You forgot your password and tried to enter the wrong one. Recover your account with your seed phrase and then change the password.</div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div>
@endsection

@section("meta_block")
    <title>Dentacoin Wallet dApp: Frequently Asked Questions</title>
    <meta name="description" content="Where to store Dentacoin tokens? How to create a Dentacoin Wallet? How to buy DCN? Find the answers to all your questions here."/>
    <meta name="keywords" content="dentacoin wallet, dcn wallet, how to buy dentacoin, how to buy dcn, store dentacoin, store dcn"/>
    <meta property="og:url" content="{{Request::url()}}"/>
    <meta property="og:title" content="Dentacoin Wallet dApp: Frequently Asked Questions"/>
    <meta property="og:description" content="Where to store Dentacoin tokens? How to create a Dentacoin Wallet? How to buy DCN? Find the answers to all your questions here."/>
    <meta property="og:image" content="{{URL::asset('assets/images/faq-wallet.png') }}"/>
@endsection