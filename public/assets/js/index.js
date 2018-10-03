basic.init();

$(document).ready(function() {
    if($('body').hasClass('amount-to')) {
        pageAmountToLogic();
    }
    console.log("( ͡° ͜ʖ ͡°) I see you.");
});

$(window).on('beforeunload', function() {

});

$(window).on("load", function()   {

});

$(window).on('resize', function(){

});

$(window).on('scroll', function()  {

});

var meta_mask_installed = false;
var meta_mask_logged = false;
var blocks_for_month_n_half = 263000;
var is_chrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var is_firefox = !(window.mozInnerScreenX == null);
var is_opera = navigator.userAgent.toLowerCase().indexOf("opr") == -1;
var called_transactions_first_time = false;
function mobileDownloadMetaMaskPopup()  {
    var button_html = '<div class="btns-container"><a class="white-aqua-btn" href="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/" target="_blank">Get from Firefox Addons</a></div>';
    var meta_mask_download_popup_html = '<div class="popup-body"> <div class="title">Are your ready to use Dentacoin Wallet?</div><div class="subtitle">You\'ll need a safe place to store all of your Dentacoin tokens.</div><div class="separator"></div><figure class="image"><img src="/assets/images/metamask.png" alt="Metamask"/> </figure><div class="additional-text">The perfect place is in a secure wallet like MetaMask. This will also act as your login to your wallet (no extra password needed).</div>'+button_html+'</div>';
    basic.showDialog(meta_mask_download_popup_html, 'download-metamask-desktop validation-popup');
}

function mobileLoginMetaMaskPopup()  {
    basic.showDialog('<div class="popup-body"> <div class="title">Sign in to MetaMask</div><div class="subtitle">Open up your browser\'s MetaMask extention.</div><div class="separator"></div><figure class="gif"><img src="/assets/images/metamask-animation.gif" alt="Login MetaMask animation"/> </figure></div>', 'login-metamask-desktop validation-popup');
}

function desktopDownloadMetaMaskPopup() {
    var button_html = '';
    /*if(!is_opera)   {
        //link for download opera metamask extention
        button_html = '<div class="btns-container"><a class="white-aqua-btn" href="https://addons.opera.com/en/extensions/details/metamask/" target="_blank">Get from Opera Addons</a></div>';
    }else if(is_chrome)   {
        //link for download chrome metamask extention
        button_html = '<div class="btns-container"><a class="white-aqua-btn" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">Get from Chrome Web Store</a></div>';
    }else if(is_firefox)   {
        //link for download firefox metamask extention
        button_html = '<div class="btns-container"><a class="white-aqua-btn" href="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/" target="_blank">Get from Firefox Addons</a></div>';
    }*/
    button_html = '<div class="btns-container"><a class="white-aqua-btn" href="https://metamask.io/" target="_blank">Get from MetaMask</a></div>';
    var meta_mask_download_popup_html = '<div class="popup-body"> <div class="title">Are your ready to use Dentacoin Wallet?</div><div class="subtitle">You\'ll need a safe place to store all of your Dentacoin tokens.</div><div class="separator"></div><figure class="image"><img src="/assets/images/metamask.png" alt="Metamask"/> </figure><div class="additional-text">The perfect place is in a secure wallet like MetaMask. This will also act as your login to your wallet (no extra password needed).</div>'+button_html+'</div>';
    basic.showDialog(meta_mask_download_popup_html, 'download-metamask-desktop validation-popup');
}

function desktopLoginMetaMaskPopup()    {
    basic.showDialog('<div class="popup-body"> <div class="title">Sign in to MetaMask</div><div class="subtitle">Open up your browser\'s MetaMask extention.</div><div class="separator"></div><figure class="gif"><img src="/assets/images/metamask-animation.gif" alt="Login MetaMask animation"/> </figure></div>', 'login-metamask-desktop validation-popup');
}

function initChecker()  {
    if(typeof(web3) !== 'undefined' && web3.eth.defaultAccount === undefined)   {
        setInterval(function()  {
            initCheckIfMetaMaskIsLogged();
        }, 500);
    }

    if(typeof(web3) !== 'undefined' && web3.currentProvider.isMetaMask === true) {
        meta_mask_installed = true;
        web3.currentProvider.publicConfigStore.on('update', onAccountSwitch);
        if(typeof(web3.eth.defaultAccount) != 'undefined')  {
            meta_mask_logged = true;
        }
    }

    if(basic.isMobile())    {
        if(typeof(web3) === 'undefined')   {
            //MOBILE
            if(!is_firefox)    {
                //popup for download mozilla browser OR trust wallet
                basic.showDialog('<div class="popup-body"> <div class="title">Download Firefox Mobile Browser or Trust Wallet</div><div class="subtitle">You can use Dentacoin Wallet on a Firefox Mobile Browser or Trust Wallet app.</div><div class="separator"></div><figure class="image"><img src="/assets/images/phone.svg" alt="Phone icon"/> </figure> <div class="btns-container"> <figure><a class="app-store" href="https://play.google.com/store/apps/details?id=org.mozilla.firefox" target="_blank"><img src="/assets/images/google-store-button.svg" alt=""/></a></figure><figure><a class="app-store" href="https://itunes.apple.com/us/app/firefox-web-browser/id989804926?mt=8" target="_blank"><img src="/assets/images/apple-store-button.svg" alt=""/></a></figure><figure><a class="white-aqua-btn" href="https://trustwalletapp.com/" target="_blank"><img src="/assets/images/trust-wallet-logo.png" alt=""/> Trust Wallet</a></figure></div></div>', 'download-mobile-browser validation-popup');
            }else {
                if(!meta_mask_installed)    {
                    //popup for download metamask
                    mobileDownloadMetaMaskPopup();
                }else if(!meta_mask_logged) {
                    //popup for login in metamask
                    mobileLoginMetaMaskPopup();
                }
            }
        }
    }else {
        //DESKTOP
        if(!is_chrome && !is_firefox && is_opera) {
            //IF NOT CHROME OR MOZILLA OR OPERA
            basic.showDialog('<div class="popup-body"> <div class="title">Download Desktop Browser</div><div class="subtitle">You can use Dentacoin Wallet on a desktop browser like Chrome, Firefox Brave or Opera.</div><div class="separator"></div><figure class="image"><img src="/assets/images/computer.svg" alt="Computer icon"/> </figure> <div class="btns-container"> <figure class="inline-block"><a class="white-aqua-btn" href="https://www.google.com/chrome/" target="_blank"><img src="/assets/images/chrome.png" alt=""/> Chrome</a></figure> <figure class="inline-block"><a class="white-aqua-btn" href="https://www.mozilla.org/en-US/firefox/new/" target="_blank"><img src="/assets/images/firefox.png" alt=""/> Firefox</a></figure> <figure class="inline-block"><a class="white-aqua-btn" href="https://www.opera.com/" target="_blank"><img src="/assets/images/opera.png" alt=""/> Opera</a></figure> <figure class="inline-block"><a class="white-aqua-btn" href="https://brave.com/download/" target="_blank"><img src="/assets/images/brave.png" alt=""/> Brave</a></figure> </div></div>', 'download-desktop-browser validation-popup');
        }else {
            if(!meta_mask_installed)    {
                //popup for download metamask
                desktopDownloadMetaMaskPopup();
            }else if(!meta_mask_logged) {
                //popup for login in metamask
                desktopLoginMetaMaskPopup();
            }
        }
    }
}

window.addEventListener('load', function() {

});

var global_state = {};
var temporally_timestamp = 0;
var send_event = false;
global_state.curr_dcn_in_usd = parseFloat($('body').attr('data-current-dcn-in-usd'));
var App = {
    web3Provider: null,
    contracts: {},
    loading: false,
    init: function() {
        return App.initWeb3();
    },
    initWeb3: function() {
        // initialize web3
        if(typeof web3 !== 'undefined') {
            //reuse the provider of the Web3 object injected by Metamask
            App.web3Provider = web3.currentProvider;
        } else {
            //create a new provider and plug it directly into our local node
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:9545');
        }
        web3 = new Web3(App.web3Provider);

        return App.initContract();
    },
    initContract: function() {
        $.getJSON('/assets/jsons/DentacoinToken.json', async function(DCNArtifact) {
            initChecker();
            // get the contract artifact file and use it to instantiate a truffle contract abstraction
            App.contracts.DentacoinToken = TruffleContract(DCNArtifact);
            // set the provider for our contracts
            App.contracts.DentacoinToken.setProvider(App.web3Provider);

            global_state.account = web3.eth.defaultAccount;

            //refresh the current dentacoin value
            if($('.homepage-container').length > 0) {
                App.updateBalance(true);
            }else {
                App.updateBalance();
            }

            //save current block number into state
            await App.helper.getBlockNum();

            //set Transfer event watcher
            App.events.logTransfer();

            App.buildTransactionsHistory();

            onAccountSwitch();
        });
    },
    updateBalance: function(homepage)  {
        App.contracts.DentacoinToken.deployed().then(function(instance) {
            return instance.balanceOf.call(global_state.account);
        }).then(function(result) {
            if(homepage === undefined){
                homepage = null;
            }

            global_state.curr_address_balance = result.toNumber();
            if(homepage != null)    {
                setTimeout(function()   {
                    initHomepageUserData();
                    $('.values-and-qr-code .animation').removeClass('rotate-animation');
                    $('.homepage-container .dcn-value .value').html(result.toNumber());
                    $('.homepage-container .output .value').html((result.toNumber() * global_state.curr_dcn_in_usd).toFixed(2));
                    $('.homepage-container .values-and-qr-code').show();
                }, 300);
            }
        }).catch(function(err) {
            console.error(err);
        });
    },
    sendValue: function(send_addr, value)  {
        App.contracts.DentacoinToken.deployed().then(function(instance) {
            console.log('sent');
            return instance.transfer(send_addr, value, {
                from: global_state.account,
                gas: 65000
            });
        }).then(function(result) {
            console.log(result, 'result');
            send_event = true;
        }).catch(function(err) {
            console.error(err);
        });
    },
    getFromTransactionsEvents: function(from_num, to)    {
        if(to === undefined){
            to = 'latest';
        }
        return new Promise(function(resolve, reject) {
            App.contracts.DentacoinToken.deployed().then(function(instance) {
                global_state.from_transactions = [];
                var event_obj = {
                    fromBlock: global_state.curr_block - from_num,
                    toBlock: to
                };
                if(global_state.curr_block - from_num < 0)    {
                    event_obj.fromBlock = 0;
                }
                var from_transfer = instance.Transfer({_from: global_state.account}, event_obj);
                from_transfer.get(function (error, logs) {
                    if (error !== null) {
                        reject(error);
                    }
                    global_state.from_transactions = logs;
                    resolve(global_state.from_transactions);
                });
            });
        });
    },
    getToTransactionsEvents: function(from_num, to)    {
        if(to === undefined){
            to = 'latest';
        }
        return new Promise(function(resolve, reject) {
            App.contracts.DentacoinToken.deployed().then(function(instance) {
                global_state.to_transactions = [];
                var event_obj = {
                    fromBlock: global_state.curr_block - from_num,
                    toBlock: to
                };
                if(global_state.curr_block - from_num < 0)    {
                    event_obj.fromBlock = 0;
                }
                var to_transfer = instance.Transfer({_to: global_state.account}, event_obj);
                to_transfer.get(function (error, logs) {
                    if (error !== null) {
                        reject(error);
                    }
                    global_state.to_transactions = logs;
                    resolve(global_state.to_transactions);
                });
            });
        });
    },
    buildTransactionsHistory: async function(num)    {
        if(num === undefined){
            num = 1;
            called_transactions_first_time = false;
            $('.transaction-history table tbody.visible-tbody').html('<tr class="loader-animation"> <td class="text-center"> <figure class="inline-block rotate-animation"><a href=""><img src="/assets/images/exchange-icon.png\" alt="Exchange icon"/></a></figure> </td></tr>');
            $('.transaction-history .show-more-holder').html('');
        }

        if(num > 1) {
            //build transactions history from previous events on the blockchain
            await App.getFromTransactionsEvents(num * blocks_for_month_n_half, global_state.curr_block - (blocks_for_month_n_half * (num - 1)));
            await App.getToTransactionsEvents(num * blocks_for_month_n_half, global_state.curr_block - (blocks_for_month_n_half * (num - 1)));
        }else {
            //build transactions history from previous events on the blockchain
            await App.getFromTransactionsEvents(num * blocks_for_month_n_half);
            await App.getToTransactionsEvents(num * blocks_for_month_n_half);
        }

        var array = global_state.from_transactions.concat(global_state.to_transactions);
        if(array.length > 0)    {
            //getting the clinics from the api cached json
            var api_clinics = await $.getJSON('/assets/jsons/clinics.json');
            var table_html = '';
            //looping for adding timestamp property for each object in the array
            for(var i = 0, len = array.length; i < len; i+=1) {
                array[i].timestamp = await App.helper.addBlockTimestampToTransaction(array[i]);
            }

            //sorting the array of objects by timestamp property
            sortByKey(array, 'timestamp');
            //reversing to get desc order
            array = array.reverse();

            //if transactions in the history are more than 3 the rest are hidden so we add show more button and bind show event
            $('.transaction-history .show-more-holder').html('');

            //looping to build the transaction history section
            for(var i = 0, len = array.length; i < len; i+=1)   {
                //timestamp*1000 because blockchain return unix timestamp
                var date_obj = new Date(array[i].timestamp*1000);
                var json_clinic = '';
                var other_address = '';
                var class_name = '';
                var label = '';
                var dcn_amount = '';
                var usd_amount = (array[i].args._value.toNumber() * global_state.curr_dcn_in_usd).toFixed(2);
                if(array[i].args._to == global_state.account)    {
                    //IF THE CURRENT ACCOUNT IS RECEIVER
                    other_address = array[i].args._from;
                    label = 'Received from';
                    class_name = 'received_from';
                    dcn_amount = '+'+array[i].args._value.toString()+' DCN';
                    if(has(api_clinics.clinics, array[i].args._from)) {
                        json_clinic = '<a href="javascript:void(0)" class="api-clinic">'+api_clinics.clinics[array[i].args._from].name+'</a>';
                    }
                }else if(array[i].args._from == global_state.account) {
                    //IF THE CURRENT ACCOUNT IS SENDER
                    other_address = array[i].args._to;
                    if(has(api_clinics.clinics, array[i].args._to)) {
                        json_clinic = '<a href="javascript:void(0)" class="api-clinic">'+api_clinics.clinics[array[i].args._to].name+'</a>';
                        label = 'Payed to';
                        class_name = 'payed_to';
                    }else {
                        label = 'Sent to';
                        class_name = 'sent_to';
                    }
                    dcn_amount = '-'+array[i].args._value.toString()+' DCN';
                }

                //first 3 are visible, rest are going to hidden tbody
                table_html+='<tr class="'+class_name+' single-transaction"><td class="align-middle icon"></td><td class="align-middle"><ul class="align-middle"><li>'+(date_obj.getUTCMonth() + 1) + '/' + date_obj.getUTCDate() + '/' + date_obj.getUTCFullYear()+'</li><li>'+new Date(array[i].timestamp*1000).getHours()+':'+new Date(array[i].timestamp*1000).getMinutes()+'</li></ul></td><td class="align-middle"><ul class="align-middle"><li><span><strong>'+label+': </strong>'+json_clinic+' ('+other_address+')</span></li><li><a href="https://etherscan.io/tx/'+array[i].transactionHash+'" target="_blank"><strong class="transaction-id">Transaction ID</strong></a></li></ul></td><td class="align-middle"><ul class="align-middle"><li class="value-dcn">'+dcn_amount+'</li><li>'+usd_amount+' USD</li></ul></td></tr>';
            }
            $('.transaction-history table tbody .loader-animation').hide()

            if(!$('.transaction-history table').hasClass('full-width-responsive'))   {
                $('.transaction-history table').addClass('full-width-responsive');
            }

            if(!called_transactions_first_time) {
                called_transactions_first_time = true;
                $('.transaction-history table tbody.visible-tbody').html(table_html);
                console.log('clearing html');
            }else {
                $('.transaction-history table tbody.visible-tbody').append(table_html);
                console.log('append html');
            }

            //checking if current transactions are more then 3 and then display the show more button
            if($('.transaction-history table tbody tr').length > 3) {
                $('.transaction-history .show-more-holder').html('<div class="col text-center"><a href="javascript:void(0)" ><strong>Show more</strong></a></div>');
                $('.transaction-history .show-more-holder a').click(function()  {
                    $(this).closest('.show-more-holder').html('');
                    $('.transaction-history table tbody tr').addClass('display_row');
                });
            }

        }

        //if from block timestamp is lower than DCN release timestamp stop the loop for calling more events
        if(await App.helper.getLoopingTransactionFromBlockTimestamp(global_state.curr_block - (num * blocks_for_month_n_half)) > new Date('2017.01.01').getTime() / 1000)   {
            App.buildTransactionsHistory(num+=1);
        }else {
            if($('.transaction-history table tbody tr.single-transaction').length == 0) {
                $('.transaction-history table tbody.visible-tbody').html('<tr><td class="text-center">No previous transactions found.</td></tr>');
            }
        }
    },
    events: {
        logTransfer: function() {
            App.contracts.DentacoinToken.deployed().then(function(instance) {
                instance.Transfer().watch(function(error, result){
                    if(!error) {
                        if(send_event && $('body').hasClass('amount-to'))   {
                            basic.showAlert('Your transaction was confirmed.', '', true);
                            $('.amount-to-container input#dcn').val('');
                            $('.amount-to-container input#usd').val('');
                        }
                    }else {
                        console.log(error);
                    }
                });
            });
        }
    },
    helper: {
        addBlockTimestampToTransaction: function(transaction)    {
            return new Promise(function(resolve, reject) {
                web3.eth.getBlock(transaction.blockNumber, function(error, result) {
                    if (error !== null) {
                        reject(error);
                    }
                    temporally_timestamp = result.timestamp;
                    resolve(temporally_timestamp);
                });
            });
        },
        getLoopingTransactionFromBlockTimestamp: function(block_num)    {
            return new Promise(function(resolve, reject) {
                web3.eth.getBlock(block_num, function(error, result) {
                    if (error !== null) {
                        reject(error);
                    }
                    resolve(result.timestamp);
                });
            });
        },
        getBlockNum: function()  {
            return new Promise(function(resolve, reject) {
                web3.eth.getBlockNumber(function(error, result) {
                    if(!error){
                        global_state.curr_block = result;
                        resolve(global_state.curr_block);
                    }
                });
            });
        }
    }
};
App.init();

function getQrCode()    {
    if(global_state.account != undefined)   {
        $.ajax({
            type: 'POST',
            url: HOME_URL + '/get-qr-code-from-address',
            data: {
                'address' : global_state.account
            },
            dataType: 'json',
            success: function (response) {
                if(response.success)    {
                    $('.homepage-container .values-and-qr-code .qr-code img').attr('src', response.success);
                }
            }
        });
    }
}

//PAGES
if($('body').hasClass('home'))  {
    $('.homepage-container .copy-address').click(function()   {
        var this_el = $(this);
        var str_to_copy = $('.homepage-container .address span');
        if(str_to_copy.data('valid-address'))   {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(str_to_copy.html()).select();
            document.execCommand("copy");
            $temp.remove();

            this_el.tooltip('show');
            setTimeout(function()   {
                this_el.tooltip('hide');
            }, 1000);
        }
    });

    $('.homepage-container .copy-address').tooltip({
        trigger: 'click'
    });
}else if($('body').hasClass('send')) {
    //on input and if valid address add active class to 'next' button for UI
    $('.send-container .wallet-address input').on('input', function()   {
        if(!meta_mask_installed || !meta_mask_logged)   {
            $(this).val('');
            if(basic.isMobile())    {
                if(!meta_mask_installed)   {
                    mobileDownloadMetaMaskPopup();
                }else if(!meta_mask_logged)   {
                    mobileLoginMetaMaskPopup();
                }
            }else {
                if(!meta_mask_installed)   {
                    desktopDownloadMetaMaskPopup();
                }else if(!meta_mask_logged)   {
                    desktopLoginMetaMaskPopup();
                }
            }
        }else {
            if(innerAddressCheck($(this).val().trim()))   {
                $('.send-container .next a').addClass('active');
            }else if($('.send-container .next a').hasClass('active')){
                $('.send-container .next a').removeClass('active');
            }
        }
    });

    $('.send-container .next a').click(function()  {
        if(!meta_mask_installed || !meta_mask_logged)   {
            if(basic.isMobile())    {
                if(!meta_mask_installed)   {
                    mobileDownloadMetaMaskPopup();
                }else if(!meta_mask_logged)   {
                    mobileLoginMetaMaskPopup();
                }
            }else {
                if(!meta_mask_installed)   {
                    desktopDownloadMetaMaskPopup();
                }else if(!meta_mask_logged)   {
                    desktopLoginMetaMaskPopup();
                }
            }
        }else {
            if(innerAddressCheck($('.send-container .wallet-address input').val().trim())) {
                window.location = HOME_URL + '/send/amount-to/' + $('.send-container .wallet-address input').val().trim();
            }else {
                basic.showAlert('Please enter valid address.', '', true);
            }
        }
    });
}

function pageAmountToLogic()    {
    var curr_addr = window.location.href.split('/')[window.location.href.split('/').length-1];
    //redirect to /send if the address it not valid or using the same address as the owner
    if(typeof(web3.eth.defaultAccount) == 'undefined' || (typeof(web3) == 'undefined' && web3.currentProvider.isMetaMask !== true) || !web3.isAddress(curr_addr) || curr_addr == global_state.account)   {
        window.location = HOME_URL + '/send';
    }

    //editing the address logic
    $('.amount-to-container .edit-address').click(function()    {
        if(!meta_mask_installed || !meta_mask_logged)   {
            if(basic.isMobile())    {
                if(!meta_mask_installed)   {
                    mobileDownloadMetaMaskPopup();
                }else if(!meta_mask_logged)   {
                    mobileLoginMetaMaskPopup();
                }
            }else {
                if(!meta_mask_installed)   {
                    desktopDownloadMetaMaskPopup();
                }else if(!meta_mask_logged)   {
                    desktopLoginMetaMaskPopup();
                }
            }
        }else {
            if ($(this).hasClass('ready-to-edit')) {
                var editing_address = $('.amount-to-container .value-to-edit').val().trim();
                if (innerAddressCheck(editing_address)) {
                    $(this).find('img').attr('src', $(this).find('img').attr('data-default-src'));
                    $('.amount-to-container .wallet-address span.address').html(editing_address);
                    $('.amount-to-container .value-to-edit').hide();
                    $('.amount-to-container .address-container span').show();
                    $('.amount-to-container .address-container').removeClass('editing');
                    $(this).removeClass('ready-to-edit');
                    window.history.pushState(null, null, HOME_URL + '/send/amount-to/' + editing_address);
                } else {
                    basic.showAlert('Please enter valid address.', '', true);
                }
            } else {
                $(this).addClass('ready-to-edit');
                $(this).find('img').attr('src', $(this).find('img').attr('data-check-src'));
                $(this).closest('.wallet-address').find('.address-container').addClass('editing');
                $('.amount-to-container .address-container span').hide();
                $('.amount-to-container .address-container .value-to-edit').show().select();
            }
        }
    });

    //on input in dcn input change usd input
    $('.amount-to-container input#dcn').on('input', function()  {
        if(!meta_mask_installed || !meta_mask_logged)   {
            $(this).val('');
            if(basic.isMobile())    {
                if(!meta_mask_installed)   {
                    mobileDownloadMetaMaskPopup();
                }else if(!meta_mask_logged)   {
                    mobileLoginMetaMaskPopup();
                }
            }else {
                if(!meta_mask_installed)   {
                    desktopDownloadMetaMaskPopup();
                }else if(!meta_mask_logged)   {
                    desktopLoginMetaMaskPopup();
                }
            }
        }else {
            $('.amount-to-container input#usd').val(($(this).val().trim() * global_state.curr_dcn_in_usd).toFixed(2));
        }
    });

    //on input in usd input change dcn input
    $('.amount-to-container input#usd').on('input', function()  {
        if(!meta_mask_installed || !meta_mask_logged)   {
            $(this).val('');
            if(basic.isMobile())    {
                if(!meta_mask_installed)   {
                    mobileDownloadMetaMaskPopup();
                }else if(!meta_mask_logged)   {
                    mobileLoginMetaMaskPopup();
                }
            }else {
                if(!meta_mask_installed)   {
                    desktopDownloadMetaMaskPopup();
                }else if(!meta_mask_logged)   {
                    desktopLoginMetaMaskPopup();
                }
            }
        }else {
            $('.amount-to-container input#dcn').val($(this).val().trim() / global_state.curr_dcn_in_usd);
        }
    });
}



function sendValue()    {
    if(!meta_mask_installed || !meta_mask_logged)   {
        if(basic.isMobile())    {
            if(!meta_mask_installed)   {
                mobileDownloadMetaMaskPopup();
            }else if(!meta_mask_logged)   {
                mobileLoginMetaMaskPopup();
            }
        }else {
            if(!meta_mask_installed)   {
                desktopDownloadMetaMaskPopup();
            }else if(!meta_mask_logged)   {
                desktopLoginMetaMaskPopup();
            }
        }
    }else {
        var dcn_val = $('.amount-to-container input#dcn').val().trim();
        var usd_val = $('.amount-to-container input#usd').val().trim();
        if (isNaN(dcn_val) || isNaN(usd_val) || dcn_val == '' || dcn_val == 0 || usd_val == '' || usd_val == 0) {
            //checking if not a number or empty values
            basic.showAlert('Please make sure all values are numbers.', '', true);
        } else if (dcn_val < 0 || usd_val < 0) {
            //checking if negative numbers
            basic.showAlert('Please make sure all values are more than 0.', '', true);
        } else if (dcn_val < 10) {
            //checking if dcn value is lesser than 10 (contract condition)
            basic.showAlert('Please make sure dcn value is more than 10. You cannot send less than 10 DCN.', '', true);
        } else if (dcn_val > global_state.curr_address_balance) {
            //checking if current balance is lower than the desired value to send
            basic.showAlert('The value you want to send is higher than your balance.', '', true);
        } else if ($('.amount-to-container .address-container').hasClass('editing')) {
            //checking if editing address is done
            basic.showAlert('Please make sure you are done with address editing.', '', true);
        } else if (!innerAddressCheck($('.amount-to-container .wallet-address span.address').html())) {
            //checking again if valid address
            basic.showAlert('Please make sure you are sending to valid address.', '', true);
        } else {
            var callback_obj = {};
            callback_obj.callback = function (result) {
                if (result) {
                    App.sendValue($('.amount-to-container .wallet-address span.address').html(), dcn_val);
                }
            };
            basic.showConfirm('Are you sure you want to continue?', '', callback_obj, true);
        }
    }
}

function innerAddressCheck(address)    {
    return web3.isAddress(address) && address != global_state.account;
}

async function onAccountSwitch() {
    if(typeof(global_state.account) != 'undefined')   {
        if(global_state.account != web3.eth.defaultAccount) {
            //doing this check because metamask fire the change event randomly, this way we detect real account switch
            //global_state.account = web3.eth.defaultAccount;

            //$('.values-and-qr-code .animation').addClass('rotate-animation');
            //App.updateBalance(true);

            //build transactions history from previous events on the blockchain
            //App.buildTransactionsHistory();
            window.location.reload();
        }
    }else {
        if($('.homepage-container').length > 0) {
            $('.homepage-container .address span').html($('.homepage-container .address span').attr('data-log-metamask'));
            $('.homepage-container .address .copy-address').hide();
        }
    }
}

function initHomepageUserData() {
    if($('.homepage-container').length > 0) {
        //change the address html and show the copy address button
        $('.homepage-container .address span').html(global_state.account);
        $('.homepage-container .address span').data('valid-address', true);
        $('.homepage-container .address .copy-address').show();

        //init new qr code
        getQrCode();
    }
}

function has(object, key) {
    return object ? hasOwnProperty.call(object, key) : false;
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];

        if (typeof x == "string")
        {
            x = (""+x).toLowerCase();
        }
        if (typeof y == "string")
        {
            y = (""+y).toLowerCase();
        }

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function hidePopupOnBackdropClick() {
    $(document).on('click', '.bootbox', function(){
        var classname = event.target.className;
        classname = classname.replace(/ /g, '.');

        if(classname && !$('.' + classname).parents('.modal-dialog').length) {
            bootbox.hideAll();
        }
    });
}
hidePopupOnBackdropClick();

function initCheckIfMetaMaskIsLogged()  {
    if(web3.eth.defaultAccount !== undefined)    {
        window.location.reload();
    }
}