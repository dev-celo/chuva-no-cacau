import { motion } from "framer-motion";

export default function ContatoChuvaNoCacau() {
  return (
    <section className="px-6 md:px-16 py-20 bg-gradient-to-br from-emerald-50 to-emerald-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <h2 className="text-4xl font-extrabold text-emerald-900">Entre em Contato</h2>
        <p className="text-lg text-emerald-800">
          Tem dúvidas, sugestões ou deseja colaborar com o <strong>Chuva no Cacau</strong>? 
          Preencha o formulário abaixo e retornaremos o quanto antes.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <div>
          <label className="block text-left text-emerald-800 font-medium">Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="mt-2 w-full rounded-xl border border-emerald-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block text-left text-emerald-800 font-medium">E-mail</label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="mt-2 w-full rounded-xl border border-emerald-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div>
          <label className="block text-left text-emerald-800 font-medium">Mensagem</label>
          <textarea
            placeholder="Escreva sua mensagem..."
            rows="5"
            className="mt-2 w-full rounded-xl border border-emerald-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 rounded-xl shadow-lg transition"
        >
          Enviar Mensagem
        </button>
      </motion.form>

      {/* Contatos alternativos */}
      <div className="mt-10 text-center text-emerald-900 space-y-2">
        <p><strong>Email:</strong> contato@chuvanocacau.com</p>
        <p><strong>Telefone:</strong> (73) 99999-0000</p>
      </div>
    </section>
  );
}
