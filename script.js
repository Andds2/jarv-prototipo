const input_chat = document.getElementById('input-chat')
const btn_atalho = document.querySelectorAll('#atalhos-button button')
const max_chat = document.getElementById('max-chat')


// icon
const icon_max = `<i class="hgi hgi-stroke hgi-arrow-expand"></i>`;
const icon_min = `<i class="hgi hgi-stroke hgi-arrow-shrink"></i>`;
let isMax = false


btn_atalho.forEach(btn => {
    btn.addEventListener('click', () => {
        input_chat.value += btn.innerHTML
    })
})

if(max_chat){
    max_chat.addEventListener('click', () => {
        const chat_old = document.getElementById('chat-old')
        chat_old.style.height = chat_old.style.height === '0px' ? '25vh' : '0px'

        const cont_chat_old = document.querySelectorAll('#chat-old .content-chat-old')
        cont_chat_old.forEach(div => {
            div.style.opacity = div.style.opacity === '0' ? '1' : '0'
        })

        const chat = document.getElementById('chat')
        chat.style.height = chat.style.height === '55vh' ? '30vh' : '55vh'

        const chat_hist = document.getElementById('chat-hist')
        chat_hist.style.height = chat_hist.style.height === '80%' ? '60%' : '80%'

        max_chat.innerHTML = isMax === true ? icon_max : icon_min
        isMax = isMax === true ? false : true
    })
}

// Escolha setor
const btns_setor = document.querySelectorAll('.escolha-setor button')
const setor_title = ['Administração', 'Financeiro', 'Marketing', 'T.I']
const setor_gastos_vlr = [
    ['R$ 6.000,00', 'R$ 500,00', 'R$ 400,00', 'R$ 800,00', 'R$ 300,00', 'R$ 8.000,00'],
    ['R$ 7.000,00', 'R$ 1.000,00', 'R$ 600,00', 'R$ 1.200,00', 'R$ 200,00', 'R$ 10.000,00'],
    ['R$ 3.000,00', 'R$ 1.000,00', 'R$ 800,00', 'R$ 2.000,00', 'R$ 1.500,00', 'R$ 8.300,00'],
    ['R$ 3.000,00', 'R$ 1.000,00', 'R$ 700,00', 'R$ 1.000,00', 'R$ 6.000,00', 'R$ 11.700,00'] 
]

const setor_gastos_nom = [
    ['Salários', 'Materiais', 'Rede', 'Treinamentos', 'Manutenção', 'Total'],
    ['Salários', 'Softwares', 'Tarifas', 'Auditorias', 'Documentos', 'Total'],
    ['Anúncios', 'Material', 'Ferramentas', 'Freelancers/agência', 'Eventos', 'Total'],
    ['Salários', 'Equipamentos', 'Software', 'Nuvem', 'Redes', 'Total']
]

const resetButton = (button) => {
    btns_setor.forEach(btn => {
        if(button == btn) {
            btn.className = 'esc'
        } else {
            btn.className = ''
        }
    })
}

btns_setor.forEach((btn, id) => {

    btn.addEventListener('click', () => {
        const set_esc = document.getElementById('setor-escolhido')
        set_esc.textContent = setor_title[id]

        const gast_nome = document.querySelectorAll('.gastos-title span')
        gast_nome.forEach((span, i) => {
            span.textContent = setor_gastos_nom[id][i]
        })

        const gast_valor = document.querySelectorAll('.gastos-valor span')
        gast_valor.forEach((span, i) => {
            span.textContent = setor_gastos_vlr[id][i]
        })

        resetButton(btn)
    })
})


