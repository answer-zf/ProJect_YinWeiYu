/*
 * @Author: answer-zf
 * @Date:   2019-08-28 10:09:03
 * @Last Modified by: answer-zf
 * @Last Modified time: 2019-10-18 15:46:57
 * @E-mail: 657829956@qq.com
 */

//
$(function() {
  $(window).scroll(function() {
    // about
    if ($(window).scrollTop() >= 300 && $(window).scrollTop() < 1100) {
      $('.i-ab-img img').css({
        transform: 'translateX(0px)',
        opacity: '1'
      })
      $('.i-ab-ati').css({
        transform: 'translateX(0px)',
        opacity: '1'
      })
    } else {
      $('.i-ab-img img').css({
        transform: 'translateX(-200px)',
        opacity: '0'
      })
      $('.i-ab-ati').css({
        transform: 'translateX(200px)',
        opacity: '0'
      })
    }
    // about #end
    // origin
    if ($(window).scrollTop() >= 900 && $(window).scrollTop() < 1800) {
      $('.i-origin .img img').css({
        transform: 'scale(1,1)  rotateZ(360deg)'
      })
    } else {
      $('.i-origin .img img').css({
        transform: 'scale(0,0)  rotateZ(0deg)'
      })
    }
    // origin end

    // food
    if ($(window).scrollTop() >= 1700 && $(window).scrollTop() < 2700) {
      $('.imgBoxL').css({
        opacity: '1',
        left: '0'
      })
      $('.imgBoxR').css({
        opacity: '1',
        left: '0'
      })
    } else {
      $('.imgBoxL').css({
        opacity: '0',
        left: '-100px'
      })
      $('.imgBoxR').css({
        opacity: '0',
        left: '100px'
      })
    }
    if ($(window).scrollTop() >= 1900 && $(window).scrollTop() < 2700) {
      $('.imgBoxL2').css({
        opacity: '1',
        left: '0'
      })
      $('.imgBoxR2').css({
        opacity: '1',
        left: '0'
      })
    } else {
      $('.imgBoxL2').css({
        opacity: '0',
        left: '-100px'
      })
      $('.imgBoxR2').css({
        opacity: '0',
        left: '100px'
      })
    }

    // food  end
  })
})
